import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_A_PRODUCT,
  CHANGE_CURRENCY,
} from '../constants/productsConstants';

import { ProductsType } from '.';

const initialState: ProductsType = {
  products: [],
  productDetails: {},
  currency: 1,
};

export const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      // console.log(action.payload);
      return { ...state, products: action.payload };
    case GET_A_PRODUCT:
      return { ...state, productDetails: action.payload };
    case CHANGE_CURRENCY:
      return { ...state, currency: action.payload };
    default:
      return state;
  }
};
