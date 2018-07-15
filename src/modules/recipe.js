
// API imports

// ------------------------------------
// Constants
// ------------------------------------

export const ADD_RECIPE = 'ADD_RECIPE';

// ------------------------------------
// Action Creators
// ------------------------------------

export const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  payload: recipe,
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
    recipes: [...state.recipes, action. payload],
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  recipes: [],
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
