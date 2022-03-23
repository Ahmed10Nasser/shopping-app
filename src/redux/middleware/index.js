import { all } from '@redux-saga/core/effects';
import createSagaMiddleware from 'redux-saga';
import getProductsMiddleware from './getProducts';

export function* rootSaga(){
    yield all([getProductsMiddleware()]);
}

export const sagaMiddleware=createSagaMiddleware();
