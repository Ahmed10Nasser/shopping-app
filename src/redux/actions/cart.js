export const ADD_TO_CART="addToCart";
export const REMOVE_FROM_CART="removeFromCart";
export const ADJUST_QUANTITY="adjustQuantity";
export const CLEAR_CART="clearCart";



export function addToCart(product){
  return{
    type: ADD_TO_CART,
    payload:{
      product
    }
  }
}

export function removeFromCart(productId){
  return{
    type: REMOVE_FROM_CART,
    payload:{
      productId
    }
  }
}

export function adjustQuantity(productId, newQuantity){
  return{
    type: ADJUST_QUANTITY,
    payload:{
      productId,
      newQuantity
    }
  }
}

export function clearCart(){
  return{
    type: CLEAR_CART
  }
}