/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers, { CartType, ProductsType } from './reducers';
// import {ProductsType} from './reducers/productsReducers';

export interface AppState {
  products: ProductsType;
  cartState: CartType;
}

// middle ware initialization
const bindMiddleware = (middleware: any) => {
  // check if app is in production
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

// root reducer
const reducer = (state: AppState, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    console.log(nextState);
    return nextState;
  }
  return reducers(state, action);
};
const initStore: MakeStore<AppState> = () =>
  createStore(reducer, bindMiddleware([thunkMiddleware]));

export const wrapper = createWrapper(initStore);
