export const LOGIN="login";
export const LOGGED_IN="loggedIn";
export const LOGOUT="logout";
export const LOGGED_OUT="loggedOut";
export const SET_USER_LOADING="setUserLoading";
export const SET_USER_ERROR="setUserError";





export function login(email, password){  // saga
  return{
    type: LOGIN,
    payload:{
      email,
      password
    }
  }
}


export function loggedIn(email, userId){
  return{
    type: LOGGED_IN,
    payload:{
      email,
      userId
    }
  }
}


export function logout(){  // saga
  return{
    type: LOGOUT
  }
}

export function loggedOut(){
  return{
    type: LOGGED_OUT
  }
}

export function setUserLoading(isLoading){
  return{
    type: SET_USER_LOADING,
    payload:{
      isLoading
    }
  }
}

export function setUserError(error){
  return{
    type: SET_USER_ERROR,
    payload:{
      error
    }
  }
}