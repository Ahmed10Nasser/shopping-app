import produce from "immer";
import { SET_SIGNED_UP, SET_SIGNUP_ERROR, SET_SIGNUP_LOADING } from "../actions/signup";


const defaultSignup={
  isLoading: false,
  error: "",
  isSignedUp: false
}


export default function signupReducer(signup=defaultSignup, action){
  switch(action.type){
    case SET_SIGNUP_LOADING:
      return produce(signup, newSignup=>{
        newSignup.isLoading=action.payload.isLoading;
      });
    case SET_SIGNUP_ERROR:
      return produce(signup, newSignup=>{
        newSignup.error=action.payload.error;
      });
    case SET_SIGNED_UP:
      return produce(signup, newSignup=>{
        newSignup.isSignedUp=action.payload.isSignedUp;
      })
    default:
      return signup;
  }
}