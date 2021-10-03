import {
  ADD_PRODUCT_TO_CART,
  CART_POSITION,
} from '../constants/cartConstants';

import { CartType } from '.';

const initialState: CartType = {
  cart: [],
  cartPosition: false,
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      // console.log(action.payload);
      return { ...state, cart: action.payload };
    case CART_POSITION:
      console.log(action.payload);
      return { ...state, cartPosition: action.payload }; 
    default:
      return state;
  }
};
