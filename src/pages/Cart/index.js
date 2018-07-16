import { connect } from "react-redux";
import Cart from "./Cart.jsx";

// action creators
// import { addRecipeToCart, deleteRecipe } from './../../modules/cart'
import { addRecipeToCart, deleteRecipe } from "./../../modules/recipe";

const mapDispatchToProps = {
  addRecipeToCart,
  deleteRecipe
};


const mapStateToProps = state => ({
  // cartRecipes: state.cartReducer.cartRecipes
  cartRecipes: state.recipeReducer.cartRecipes
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
