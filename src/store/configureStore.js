import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
// Reducer imports
import recipeReducer from "./../modules/recipe";
import cartReducer from "./../modules/cart";

const reducers = {
  recipeReducer,
  cartReducer
}

// This is used to combine all the reducers from the application
const appReducer = combineReducers(reducers);

// This is used to convert the combined reducers to pure json objects
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

//CREATE STORE
// Creating a redux store using reducers and initial state
const initialState = {};
const configureStore = initialState =>
  createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // For Redux devtools
    //   applyMiddleware(thunk),
  );

const store = configureStore(initialState);

export default store;
