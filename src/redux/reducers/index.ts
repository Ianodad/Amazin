import { combineReducers } from 'redux';

import { productsReducer } from './productsReducers';
import { cartReducer } from './cartReducer';
export interface ProductsType {
  products: any[];
  productDetails: any;
  currency: number;
}

export interface CartType {
  cart: any[];
  cartPosition: boolean;
}

const reducer = combineReducers({
  products: productsReducer,
  cartState: cartReducer,
});

export default reducer;
