import { combineReducers } from 'redux';

import { productsReducer } from './productsReducers';
import { cartReducer } from './cartReducer';
export interface ProductsType {
  products: any[];
  productDetails: any;
}

export interface CartType {
  cart: any[];
}

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default reducer;
