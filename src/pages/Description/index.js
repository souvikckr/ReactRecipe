import { connect } from "react-redux";
import Description from "./Description.jsx";
import { bindActionCreators } from "redux";

// action creators
import { addActiveRecipe, addRecipeToCart } from './../../modules/recipe';
// import { addRecipeToCart } from './../../modules/recipe'

// const mapDispatchToProps =  {
//     addActiveRecipe,
//     addRecipeToCart
// };

const mapDispatchToProps = (dispatch) => ({
    addActiveRecipe:(recipe) => dispatch(addActiveRecipe(recipe)),
    addRecipeToCart:(recipe) => dispatch(addRecipeToCart(recipe))
})

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         addActiveRecipe,
//         addRecipeToCart
//         // addRecipeToCartFromRed
//     }, dispatch);
// }

const mapStateToProps = state => ({
    recipes: state.recipeReducer.recipes,
    activeRecipe: state.recipeReducer.activeRecipe
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Description);
