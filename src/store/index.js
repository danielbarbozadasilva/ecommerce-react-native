import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

import AuthReducer from './auth/auth.reducer';
import ProductReducer from './product/product.reducer';
import CategoryReducer from './category/category.reducer';
import ClientReducer from './client/client.reducer';
import CartReducer from './cart/cart.reducer';

const reducers = combineReducers({
  auth: AuthReducer,
  product: ProductReducer,
  category: CategoryReducer,
  client: ClientReducer,
  cart: CartReducer,
});

const middlewares = [thunk, multi];

const compose = applyMiddleware(...middlewares);

const store = createStore(reducers, compose);

export default store;
