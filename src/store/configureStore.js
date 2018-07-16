import { combineReducers } from 'redux';
import reducers from './../modules';
import { createStore, applyMiddleware, compose } from 'redux';

const appReducer = combineReducers(reducers);
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const configureStore = initialState =>
  createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // For Redux devtools
    //   applyMiddleware(thunk),
  );

const initialState = {};

const store = configureStore(initialState);

export default store;
