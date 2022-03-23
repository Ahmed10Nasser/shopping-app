import {takeEvery, put} from 'redux-saga/effects';
import { loggedIn, loggedOut, LOGIN, LOGOUT, setUserError, setUserLoading} from '../actions/auth';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';

import auth from '../../firebase';
import { setSignedUp, setSignupError } from '../actions/signup';



function* loginSaga(action){
  yield put(setUserLoading(false));
  yield put(setUserError(""));
  try{
    yield signInWithEmailAndPassword(auth, action.payload.email, action.payload.password);
    yield put(loggedIn(auth.currentUser.email, auth.currentUser.uid));
    // reset Signup state
    yield put(setSignedUp(false));
    yield put(setSignupError(""));
  }
  catch(err){
    yield put(setUserError(err.message));
  }
  yield put(setUserLoading(false));
}

function* logoutSaga(){
  yield put(setUserError(""));
  try{
    yield signOut(auth);
    yield put(loggedOut());
  }
  catch(err){
    yield put(setUserError(err.message));
  }
  yield put(setUserLoading(false));
}

export default function* authMiddleware(){
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(LOGOUT, logoutSaga);
}