export const SET_LOADING="setLoading";
export const GET_PRODUCTS="getProducts";
export const SET_PRODUCTS="setProducts";
export const SET_ERROR="setError";



export function setLoading(isLoading){
  return{
    type: SET_LOADING,
    payload:{
      isLoading
    }
  }
}


export function setError(error){
  return{
    type: SET_ERROR,
    payload: {
      error
    }
  }
}

export function setProducts(products){
  return{
    type: SET_PRODUCTS,
    payload:{
      products
    }
  }
}


export function getProducts(){
  return{
    type: GET_PRODUCTS
  }
}