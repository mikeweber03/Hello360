/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import countReducer from './countReducer';
export default combineReducers({
 simpleReducer,
 countReducer
});