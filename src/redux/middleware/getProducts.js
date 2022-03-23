import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';
import { GET_PRODUCTS, setError, setLoading, setProducts } from '../actions/getProducts';

function* getProductsSaga(){
  yield put(setLoading(true));
  yield put(setError(""));
  try{
    const res= yield axios.get('https://fakestoreapi.com/products?limit=5');
    yield put(setProducts(res.data));
    console.log(1);
  }
  catch(err){
    yield put(setError(err.message));
  }
  yield put(setLoading(false));
}

export default function* getProductsMiddleware(){
  yield takeEvery(GET_PRODUCTS, getProductsSaga);
}