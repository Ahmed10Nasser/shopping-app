import {combineReducers} from 'redux';
import getProductsReducer from './getProducts';


export default combineReducers({
  products: getProductsReducer, 
});