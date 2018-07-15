import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar>
        <NavLink to="cart">
          <Button onClick={this.handleCart}>Cart</Button>
        </NavLink>

        <NavLink to="recipe">
          <Button onClick={this.handleRecipe}>Add Recipe</Button>
        </NavLink>

        <NavLink to="desc">
          <Button onClick={this.handleDesc}>Description</Button>
        </NavLink>
      </Navbar>
    );
  }
}

export default NavbarComponent;
