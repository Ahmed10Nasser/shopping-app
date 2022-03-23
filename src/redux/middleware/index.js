import { all } from '@redux-saga/core/effects';
import createSagaMiddleware from 'redux-saga';
import authMiddleware from './auth';
import getProductsMiddleware from './getProducts';
import signupMiddleware from './signup';

export function* rootSaga(){
    yield all([getProductsMiddleware(), authMiddleware(), signupMiddleware()]);
}

export const sagaMiddleware=createSagaMiddleware();
