import { combineReducers } from 'redux';
import home from './home';

const reducers = { home };

const combineReducer = combineReducers(reducers);
export default combineReducer;
