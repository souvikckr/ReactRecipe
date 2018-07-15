import { connect } from "react-redux";
import RecipeForm from "./RecipeForm.jsx";

// action creators
import { addRecipe } from "./../../modules/recipe";

const mapDispatchToProps = {
  addRecipe
};

// const mapStateToProps = (state) => ({
//   showModal: state.modalReducer.showModal,
// });

export default connect(
  null,
  mapDispatchToProps
)(RecipeForm);
