import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar>
        <NavLink exact to="/" className="navbar-brand">
        🥨 Snack or Booze 🍺
        </NavLink>

        <Nav className='navbar-text'>
          <NavItem>
            <NavLink to="/snacks">Snacks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/drinks">Drinks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/add" id="new-item">Add to Our Menu!</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
