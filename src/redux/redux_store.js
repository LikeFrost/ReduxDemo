import {createStore, applyMiddleware } from 'redux';
import  {menuReducer} from './reducers/menu_reducer';
import thunk from 'redux-thunk';

const store = createStore(menuReducer,applyMiddleware(thunk));
export default store;