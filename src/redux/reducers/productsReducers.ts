import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_A_PRODUCT,
} from '../constants/productsConstants';

import { ProductsType } from '.';

const initialState: ProductsType = {
  products: [],
  productDetails: {},
};

export const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      // console.log(action.payload);
      return { ...state, products: action.payload };
    case GET_A_PRODUCT:
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};
