import { combineReducers } from 'redux';

import { productsReducer } from './productsReducers';
import { cartReducer } from './cartReducer';
export interface ProductsType {
  products: unknown[];
  productDetails: unknown;
  currency: number;
}

export interface CartType {
  cart: unknown[];
  cartPosition: boolean;
}

const reducer = combineReducers({
  products: productsReducer,
  cartState: cartReducer,
});

export default reducer;
