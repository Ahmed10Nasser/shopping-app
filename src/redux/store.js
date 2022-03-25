import { applyMiddleware, createStore,compose } from "redux";
import { getProducts } from "./actions/getProducts";
import { rootSaga, sagaMiddleware } from "./middleware";
import reducers from "./reducers";


// const store=createStore(reducers, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const store=createStore(reducers, compose(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(rootSaga);

store.dispatch(getProducts());

export default store;