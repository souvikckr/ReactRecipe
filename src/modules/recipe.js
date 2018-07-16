 // ------------------------------------
// Constants
// ------------------------------------

export const ADD_RECIPE = "ADD_RECIPE";
export const ACTIVE_RECIPE = "ACTIVE_RECIPE";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_RECIPE = "DELETE_RECIPE";

// ------------------------------------
// Action Creators
// ------------------------------------

export const addRecipe = recipe => ({
  type: ADD_RECIPE,
  payload: recipe
});

export const addActiveRecipe = recipe => ({
  type: ACTIVE_RECIPE,
  payload: recipe
});

export const addRecipeToCart = recipe => ({
  type: ADD_TO_CART,
  payload: recipe
});

export const deleteRecipe = recipes => ({
  type: DELETE_RECIPE,
  payload: recipes
});



const initialState = {
  recipes: [],
  cartRecipes: [],
  activeRecipe: "No Active recipe"
};

// ------------------------------------
// Reducer
// ------------------------------------

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_RECIPE: 
    return {
      ...state,
      recipes: [...state.recipes, action.payload],
    }
    case ACTIVE_RECIPE:
    return {
      ...state,
      activeRecipe: action.payload
    }
    case ADD_TO_CART:
    return {
      ...state,
      cartRecipes: [...state.cartRecipes, action.payload]
    }
    case DELETE_RECIPE: 
    return {
      ...state,
      cartRecipes: action.payload,
      recipes: action.payload
    }
    default:
    return state
  }
};