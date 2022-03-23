export const SIGNUP="signup";
export const SET_SIGNUP_LOADING='setSignupLoading';
export const SET_SIGNUP_ERROR="setSignupError";
export const SET_SIGNED_UP="setSignedUp"

export function signup(email, password){  // saga
  return{
    type: SIGNUP,
    payload:{
      email,
      password
    }
  }
}

export function setSignupLoading(isLoading){
  return{
    type: SET_SIGNUP_LOADING,
    payload:{
      isLoading
    }
  }
}

export function setSignupError(error){
  return{
    type: SET_SIGNUP_ERROR,
    payload:{
      error
    }
  }
}

export function setSignedUp(isSignedUp){
  return{
    type: SET_SIGNED_UP,
    payload:{
      isSignedUp
    }
  }
}