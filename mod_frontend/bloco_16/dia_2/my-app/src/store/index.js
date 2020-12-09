import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer);

export default store;

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));