import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = applyMiddleware(thunk)(createStore)(reducer);
export default store;
