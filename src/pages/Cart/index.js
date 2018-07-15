import { connect } from "react-redux";
import Cart from "./Cart.jsx";

// action creators
import { addRecipeToCart, deleteRecipe } from './../../modules/cart'

const mapDispatchToProps =  {
    addRecipeToCart,
    deleteRecipe
};

const mapStateToProps = state => ({
    cartRecipes: state.cartReducer.cartRecipes
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
