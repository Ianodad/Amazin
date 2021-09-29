import { GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_FAILURE } from '../constants/productsConstants';

import { ProductsType } from '.';

const initialState: ProductsType = {
  products: [],
};

export const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      // console.log(action.payload);
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
