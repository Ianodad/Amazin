import { combineReducers } from 'redux';

import { productsReducer } from './productsReducers';

export interface ProductsType {
  products: any[];
  productDetails: any;
}

const reducer = combineReducers({
  products: productsReducer,
});

export default reducer;
