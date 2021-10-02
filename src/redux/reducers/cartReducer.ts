import { ADD_PRODUCT_TO_CART, ADD_PRODUCT_CART_FAILURE } from '../constants/cartConstants';

import { CartType } from '.';

const initialState: CartType = {
  cart: [],
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      // console.log(action.payload);
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
