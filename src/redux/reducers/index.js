import {combineReducers} from 'redux';
import authReducer from './auth';
import getProductsReducer from './getProducts';
import signupReducer from './signup';


export default combineReducers({
  products: getProductsReducer, 
  user: authReducer,
  signup: signupReducer
});