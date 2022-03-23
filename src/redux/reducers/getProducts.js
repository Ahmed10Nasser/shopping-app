import produce from "immer";
import { SET_ERROR, SET_LOADING, SET_PRODUCTS } from "../actions/getProducts";



const defaultProducts={
  isLoading : false,
  error: "",
  values: []
}

export default function getProductsReducer(products=defaultProducts, action){
  switch(action.type){
    case SET_LOADING:
      return produce(products, newProducts=>{
        newProducts.isLoading=action.payload.isLoading;
      });
    case SET_ERROR:
      return produce(products, newProducts=>{
        newProducts.error=action.payload.error;
      });
    case SET_PRODUCTS:
      return produce(products, newProducts=>{
        newProducts.values=action.payload.products;
      });
    default:
      return products;
  }
}