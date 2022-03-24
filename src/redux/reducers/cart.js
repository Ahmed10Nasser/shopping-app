import produce from "immer";
import { ADD_TO_CART, ADJUST_QUANTITY, CLEAR_CART, REMOVE_FROM_CART } from "../actions/cart";


const defaultCart={
  totalPrice:0,
  products:[] // {productId, quantity}
}


export default function cartReducer(cart=defaultCart, action){
  switch(action.type){
    case ADD_TO_CART:
      return produce(cart, newCart=>{
        const index=newCart.products.findIndex((product)=>
          product.id === action.payload.product.id
        );
        if(index===-1){
          newCart.products.push({...action.payload.product, quantity: 1});
          newCart.totalPrice+=parseInt(action.payload.product.price);
        }
        else{
          newCart.products[index].quantity+=1;
          newCart.totalPrice+=parseInt(newCart.products[index].price);
        }
      });

    case REMOVE_FROM_CART:
      return produce(cart, newCart=>{
        const index=newCart.products.findIndex((product)=>
          product.id === action.payload.productId
        );
        if(index!==-1){
          newCart.totalPrice-=(newCart.products[index].quantity * parseInt(newCart.products[index].price));
          newCart.products.splice(index,1);
        }
      });
    
    case ADJUST_QUANTITY:
      return produce(cart, newCart=>{
        const index=newCart.products.findIndex((product)=>
          product.id === action.payload.productId
        );
        if(index!==-1){
          newCart.totalPrice-=(newCart.products[index].quantity * parseInt(newCart.products[index].price))
          newCart.products[index].quantity=action.payload.newQuantity;
          newCart.totalPrice+=(newCart.products[index].quantity * parseInt(newCart.products[index].price))
        }
      });
    case CLEAR_CART:
      return produce(cart, newCart=>{
        newCart.totalPrice=0;
        newCart.products=[];
      });
    default:
      return cart;
  }
}