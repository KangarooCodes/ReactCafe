import React, {useState} from "react";
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from "reactstrap";
import './NewItemForm.css'

function Add({ newDrink, newSnack}) {
    const INTIAL_STATE = {  name : "",
                            description: "",
                            recipe: "",
                            serve: "",
                            menuType : "drinks"
                        }
    
    const [formData, setFormData] = useState(INTIAL_STATE);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name] : value}))
    }
    const handleSubmit = () =>{
        let type = formData.menuType;
        delete formData.menuType;
		if (type === "drinks") newDrink({...formData, id: formData.name})
        if (type === "snacks") newSnack({...formData, id: formData.name })
		setFormData(INTIAL_STATE)
	}

	const isFormFilled = () => {		
		if(formData.name,formData.description,formData.recipe,formData.serve !== ""){
			if(formData.name,formData.description,formData.recipe,formData.serve !== undefined){
			document.getElementById("form-button").className=''
			}
		}
	}

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="Add-Title font-weight-bold text-center">
            Add Your Own Menu Item!
          </CardTitle>
          <Form onChange={isFormFilled}>
              <FormGroup>
              <Label for="menuType">Drink or Snack</Label>
                <Input type="select" name="menuType" id="menuType" value={formData.menuType} onChange={handleChange}>
                    <option value="snack">Snack</option>
                    <option value="drinks">Drinks</option>  
                </Input>
              </FormGroup>
              <FormGroup>
                  <Label for="name">Name</Label>
                  <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange}/>
              </FormGroup>
              <FormGroup>
                  <Label for="description">Description</Label>
                  <Input type="text" name="description" id="description" value={formData.description} onChange={handleChange}/>
              </FormGroup>
              <FormGroup>
                  <Label for="recipe">Recipe</Label>
                  <Input type="text" name="recipe" id="recipe" value={formData.recipe} onChange={handleChange}/>
              </FormGroup>
              <FormGroup>
                  <Label for="serve">How should it be served?</Label>
                  <Input type="text" name="serve" id="serve" value={formData.serve} onChange={handleChange}/>
              </FormGroup>
              <Button id="form-button" className="hidden" onClick={handleSubmit}>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default Add;