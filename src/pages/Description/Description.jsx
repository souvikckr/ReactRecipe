import React, { Component } from "react";
import { Col, Button, Label, Image } from "react-bootstrap";
import "./Description.css";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   ingredients: {
    //     name: "",
    //     list: [{ name: "", count: "" }]
    //   }
    };
  }

  componentDidMount() {
    console.log("----recipe---", this.props.recipes);
  }

  recipeHandle = e => {
    console.log("--target value--", e.target.value);
    this.props.addActiveRecipe(JSON.parse(e.target.value));
  };

  handleAddToCart = () => {
    this.props.addRecipeToCart(this.props.activeRecipe)
  }

  /* eslint-disable react/jsx-filename-extension */
  render() {
    const list = this.props.recipes.map(recipe => {
      return (
        <div className="recipe-container">
          <Button value={JSON.stringify(recipe)} onClick={this.recipeHandle}>
            {recipe.name}
          </Button>
        </div>
      );
    });

    let ingr;
    if (this.props.activeRecipe.ingredients) {
      ingr = this.props.activeRecipe.ingredients.map(ingr => {
        return (
          <div className="ingr-content">
            <span>{ingr.name}</span>
            <span>{ingr.quantity}</span>
          </div>
        );
      });
    }

    const desc = (
      <div className="desc-conatiner">
        <div>
          Name: <Label>{this.props.activeRecipe.name}</Label>
        </div>
        <div>
          Description <Label>{this.props.activeRecipe.description}</Label>
        </div>
        <div>
          Image
          <Label>
            <Image src={this.props.activeRecipe.imgUrl} rounded />
          </Label>
        </div>
        <div className="ingr">
          <div>Ingredients</div>
          {ingr}
        </div>
        <div>
          <Button onClick={this.handleAddToCart}>Add To Cart</Button>
        </div>
      </div>
    );
    return (
      <React.Fragment>
        <div>
          <Col md={3} className="overview-col-1">
            {list}
          </Col>
          <Col md={9} className="overview-col-2">
            {this.props.activeRecipe !== null ? desc : "no "}
          </Col>
        </div>
      </React.Fragment>
    );
  }
}
export default Description;
