import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

import AuthReducer from './auth/auth.reducer';
import ProductReducer from './product/product.reducer';

const reducers = combineReducers({
  auth: AuthReducer,
  product: ProductReducer,
});

const middlewares = [thunk, multi];

const compose = applyMiddleware(...middlewares);

const store = createStore(reducers, compose);

export default store;
