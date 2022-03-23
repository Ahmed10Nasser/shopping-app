import {takeEvery, put} from 'redux-saga/effects';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {setSignupError, setSignupLoading, setSignedUp, SIGNUP} from '../actions/signup';

import auth from '../../firebase';


function* signupSaga(action){
  yield put(setSignupLoading(false));
  try{
    yield createUserWithEmailAndPassword(auth, action.payload.email, action.payload.password);
    yield put(setSignedUp(true));
    yield put(setSignupError(""));
  }
  catch(err){
    yield put(setSignedUp(false));
    yield put(setSignupError(err.message));
  }
  yield put(setSignupLoading(false));
  
}

export default function* signupMiddleware(){
  yield takeEvery(SIGNUP, signupSaga);
}