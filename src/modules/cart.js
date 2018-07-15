// API imports

// ------------------------------------
// Constants
// ------------------------------------

export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_RECIPE = "DELETE_RECIPE";


// ------------------------------------
// Action Creators
// ------------------------------------

export const addRecipeToCart = recipe => ({
  type: ADD_TO_CART,
  payload: recipe
});

export const deleteRecipe = recipes => ({
  type: DELETE_RECIPE,
  payload: recipes
});

// ------------------------------------
// Action Creators ( For Asynchronous calls )
// ------------------------------------

// export const addRecipeToStore = (recipe) => (dispatch) => {
//     dispatch(addRecipe(recipe));
// }

// export const actions = {
//     addRecipe,
// };

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [ADD_TO_CART]: (state, action) => ({
    ...state,
    cartRecipes: [...state.cartRecipes, action.payload]
  }),
  [DELETE_RECIPE]: (state, action) => ({
    ...state,
    cartRecipes: action.payload
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  cartRecipes: []
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
