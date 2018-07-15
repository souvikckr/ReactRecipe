import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import './RecipeForm.scss';

const FieldGroup = ({ id, label, help, validate, ...props }) => {
  return (
    <FormGroup controlId={id} validationState={validate}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      <FormControl.Feedback />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};

const IngredientItem = ({ ingredient, index, onDelete, onChange }) => {
  const handleOnChange = (e) => {
    const value = e.target.value;
    const fieldType = e.target.name;
    fieldType === 'ing-name' ? onChange(index, value, 'name') : onChange(index, value, 'quantity');
  };

  const onDeleteClick = () => {
    onDelete(index);
  };

  return (
    <div className="ing-list-item">
      <FieldGroup
        id={ingredient.id}
        type="text"
        label="Ing Name"
        placeholder="Enter Ing name"
        name="ing-name"
        value={ingredient.name}
        onChange={handleOnChange}
      />
      <FieldGroup
        id={ingredient.id}
        type="text"
        label="Ing Quantity"
        placeholder="Enter Ing Quantity"
        name="ing-quantity"
        value={ingredient.quantity}
        onChange={handleOnChange}
      />
      <i className="fa fa-trash ing-trash" onClick={onDeleteClick} />
    </div>
  );
};

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeForm: {
        name: '',
        description: '',
        imgUrl: '',
        ingredients: [],
      },
    };
  }

  handleInputValidation = (inputType) => {
    // console.log('handleInputValidation:', inputType);
    const length = this.state.recipeForm[inputType].length;
    if (length > 3) return 'success';
    else if (length > 0) return 'error';
    return null;
  };

  handleInputOnChange = (e) => {
    const { name, value } = e.target;
    const newFormState = {
      ...this.state.recipeForm, // keep existing state values
      [name]: value, // update new value
    };
    this.setState({
      recipeForm: newFormState,
    });
    // console.log("--new form state---", this.state.recipeForm);
  };

  handelFormSubmit = (e) => {
    e.preventDefault();
    console.log("--recipe form--", this.state.recipeForm);
    this.props.addRecipe(this.state.recipeForm);
    console.log('submit', );
  };

  addIngre = () => {
    const newIng = {
      id: 'ing-' + (Math.random() * 999).toFixed(0).toString(),
      name: '',
      quantity: '',
    };

    this.setState({
      recipeForm: {
        ...this.state.recipeForm,
        ingredients: [...this.state.recipeForm.ingredients, newIng],
      },
    });
  };

  updateIngredientAtIndex = (index, value, type) => {
    // get existing ing from state at index
    // No mutation, i.e new object
    const existingIng = {
      ...this.state.recipeForm.ingredients[index],
      [type]: value,
    };

    // add updated ing to state
    // map over exsting list and create a new one
    const newList = this.state.recipeForm.ingredients.map((ing, i) => (i === index ? existingIng : ing));

    // add this newList to state
    this.setState(
      (prevState) => ({
        recipeForm: {
          ...prevState.recipeForm,
          ingredients: newList,
        },
      })
      // () => console.log(this.state)
    );
    // console.log('Update:', index);
  };

  deleteIngredientAtIndex = (index) => {
    console.log('Delete:', index);
    const newList = this.state.recipeForm.ingredients.filter((ing, i) => i !== index);

    this.setState((prevState) => ({
      recipeForm: {
        ...prevState.recipeForm,
        ingredients: newList,
      },
    }));
  };

  renderIngredientsLayout = () => {
    const renderIngredients = () => {
      const list = this.state.recipeForm.ingredients.map((ing, i) => (
        <IngredientItem
          key={ing.id}
          ingredient={ing}
          index={i}
          onChange={this.updateIngredientAtIndex}
          onDelete={this.deleteIngredientAtIndex}
        />
      ));
      return list;
    };

    return (
      <React.Fragment>
        <Button bsStyle="success" onClick={this.addIngre}>
          Add ingredients
        </Button>
        <hr />
        {renderIngredients()}
      </React.Fragment>
    );
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <form onSubmit={this.handelFormSubmit}>
              <FieldGroup
                id="name"
                type="text"
                label="Recipe Name"
                placeholder="Enter recipe name"
                name="name"
                value={this.state.recipeForm.name}
                validate={this.handleInputValidation('name')}
                onChange={this.handleInputOnChange}
              />

              <FieldGroup
                id="description"
                type="textarea"
                label="Description"
                placeholder="Enter recipe description"
                name="description"
                componentClass="textarea"
                value={this.state.recipeForm.description}
                validate={this.handleInputValidation('description')}
                onChange={this.handleInputOnChange}
              />

              <FieldGroup
                id="imgUrl"
                type="text"
                label="Recipe Image"
                placeholder="Enter recipe image url"
                name="imgUrl"
                value={this.state.recipeForm.imgUrl}
                validate={this.handleInputValidation('imgUrl')}
                onChange={this.handleInputOnChange}
              />

              {this.renderIngredientsLayout()}

              <Button bsStyle="primary" type="submit" onClick={this.handelFormSubmit}>
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default RecipeForm;