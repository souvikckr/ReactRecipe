import { connect } from "react-redux";
import Description from "./Description.jsx";

// action creators
import { addActiveRecipe } from './../../modules/recipe';

const mapDispatchToProps =  {
    addActiveRecipe
};

const mapStateToProps = state => ({
    recipes: state.recipeReducer.recipes,
    activeRecipe: state.recipeReducer.activeRecipe
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Description);
