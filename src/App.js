import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import FoodMenu from "./Menu";
import Snack from "./MenuItem";
import Add from "./NewItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getDrinksandSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);

      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);

      setIsLoading(false);
    }
    getDrinksandSnacks();
  }, []);

  async function newDrink(drink) {
    setDrinks(drinks => [...drinks, drink])
    let drinks = await SnackOrBoozeApi.getDrinks();
    let drinkCheck = [];
    for(let x in drinks){
      drinkCheck.push(drinks[x].name.toLowerCase())
    }
    if(drinkCheck.includes(drink.name.toLowerCase())) {
      alert('We already offer this beverage! Great minds think alike :)')
      window.location.replace(`http://localhost:3000/Drinks/${drink.name}`);
    } else { 
      SnackOrBoozeApi.set(drink, "drinks")
        window.location.replace(`http://localhost:3000/Drinks/${drink.name}`)
    } 
  }

  async function newSnack(snack) {
    setSnacks(snacks => [...snacks, snack])
    let snacks = await SnackOrBoozeApi.getDrinks();
    let snackCheck = [];
    for(let x in snacks){
      snackCheck.push(snacks[x].name.toLowerCase())
    }
    if(snackCheck.includes(snack.name.toLowerCase())) {
      alert('We already offer this snack! Great minds think alike :)')
      window.location.replace(`http://localhost:3000/Snacks/${snack.name}`);
    } else { 
      SnackOrBoozeApi.set(snack, "snacks")
      window.location.replace(`http://localhost:3000/Snacks/${snack.name}`);
    }
}
  if (isLoading) {
    return <p className="loading">Loading ...</p>;
  }

  return (
    <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks}/>
            </Route>
            <Route exact path="/snacks">
              <FoodMenu snacks={snacks} title="snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <FoodMenu drinks={drinks} title="drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Snack items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/add">
              <Add newDrink={newDrink} newSnack={newSnack} cantFind="/"/>
            </Route>
            <Link to="/">
              <p className="err">You seem lost.. Click here to return to our Home Page </p>
            </Link>
          </Switch>
        </main>
    </div>
  );
}

export default App;
