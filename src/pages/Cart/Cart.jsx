import React, { Component } from "react";
import { Col, Button, Label, Image, Table } from "react-bootstrap";
import "./Cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("----recipe---", this.props.cartRecipes);
  }

  handleDelete = (e) => {
    const name = e.target.value;
    const newObj = this.props.cartRecipes.filter(e => (e.name !== name));
    this.props.deleteRecipe(newObj);
  }

  render() {
    let recipes;
    if (this.props.cartRecipes) {
      recipes = this.props.cartRecipes.map(recipe => {
        return (
          <tr>
            <td>{recipe.name}</td>
            <td>{recipe.ingredients.map(ingr => <div>{ingr.name}</div>)}</td>
            <td>
              {recipe.ingredients.map(ingr => <div>{ingr.quantity}</div>)}
            </td>
            <td><Button bsStyle="danger" value={recipe.name} onClick={this.handleDelete}>Delete Item</Button></td>
          </tr>
        )
      })
    }
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ingredients</th>
              <th>Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{recipes}</tbody>
        </Table>
      </div>
    );
  }
}
export default Cart;
