import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ snacks, drinks }) {

  // defining link and choice of food or drink
  let items;
  let link;
  let descript;

  // if navbar choice is snacks or drinks, change information
  // below to sync with user choice
  if (snacks) {
    items = snacks;
    link = 'Snacks';
    descript = 'Please check our following snack options!'
  }
  else {
    items = drinks;
    link = 'Drinks';
    descript = 'We offer all drinks below as virgin options, as well!'
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {link} Menu
          </CardTitle>
          <CardText>
            {descript}
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link id={item.id} to={`/${link}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
                <ListGroupItem><span className="menuDesc">{item.description}</span></ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
