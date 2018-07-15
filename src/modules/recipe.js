// API imports

// ------------------------------------
// Constants
// ------------------------------------

export const ADD_RECIPE = "ADD_RECIPE";
export const ACTIVE_RECIPE = "ACTIVE_RECIPE";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_RECIPE = "DELETE_RECIPE";

// ------------------------------------
// Action
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
  [ADD_RECIPE]: (state, action) => ({
    ...state,
    recipes: [...state.recipes, action.payload]
  }),
  [ACTIVE_RECIPE]: (state, action) => ({
    ...state,
    activeRecipe: action.payload
  }),
  [ADD_TO_CART]: (state, action) => ({
    ...state,
    cartRecipes: [...state.cartRecipes, action.payload]
  }),
  [DELETE_RECIPE]: (state, action) => ({
    ...state,
    cartRecipes: action.payload,
    recipes: action.payload
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  recipes: [],
  cartRecipes: [],
  activeRecipe: "No Active recipe"
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
