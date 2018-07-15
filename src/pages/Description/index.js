import { connect } from "react-redux";
import Description from "./Description.jsx";

// action creators
// import { actions } from './../../modules/recipe';

// const mapDispatchToProps = (dispatch) => {
//     dispatch(actions.addRecipe);
// };

const mapStateToProps = state => ({
    recipes: state.recipeReducer.recipes
});

export default connect(
  mapStateToProps,
  null
)(Description);
