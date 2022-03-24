import {combineReducers} from 'redux';
import authReducer from './auth';
import cartReducer from './cart';
import getProductsReducer from './getProducts';
import signupReducer from './signup';


export default combineReducers({
  products: getProductsReducer, 
  user: authReducer,
  signup: signupReducer,
  cart: cartReducer
});