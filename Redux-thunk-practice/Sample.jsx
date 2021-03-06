//Redux-thunk-practice
/*
 *  After npm install redux-thunk
 *  Then, to enable Redux Thunk, use applyMiddleware():
 *  Source: https://github.com/reduxjs/redux-thunk
 *  2nd Source: https://chentsulin.github.io/redux/docs/introduction/Motivation.html
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
