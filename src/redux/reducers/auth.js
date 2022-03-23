import produce from "immer"
import { LOGGED_IN, LOGGED_OUT, SET_USER_ERROR, SET_USER_LOADING } from "../actions/auth"

const defaultUser={
  isLoading: false,
  error: "",
  email: null,
  userId: null
};


export default function authReducer(user=defaultUser, action){
  switch(action.type){
    case SET_USER_LOADING:
      return produce(user, newUser=>{
        newUser.isLoading=action.payload.isLoading;
      });
    case SET_USER_ERROR:
      return produce(user, newUser=>{
        newUser.error=action.payload.error;
      });
    case LOGGED_IN:
      return produce(user, newUser=>{
        newUser.email=action.payload.email;
        newUser.userId=action.payload.userId;
      });
    case LOGGED_OUT:
      return produce(user, newUser=>{
        newUser.email=null;
        newUser.userId=null;
      });
    default:
      return user;
  }
}