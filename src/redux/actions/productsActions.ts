import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_A_PRODUCT,
  GET_A_PRODUCT_FAILURE,
} from '../constants/productsConstants';
import { Action } from 'redux';
import absoluteUrl from 'next-absolute-url';
import axios from 'axios';

export const getAllProducts = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`http://localhost:3000/api/products`);

    // wax-on wax-off
    const dataProducts = JSON.parse(JSON.stringify(data));

    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: dataProducts,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCTS_FAILURE,
      payload: error,
    });
  }
};

export const getProduct = (req, id) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`http://localhost:3000/api/products`);

    // wax-on wax-off
    const dataProducts = JSON.parse(JSON.stringify(data));
    let dataProduct = dataProducts.find((product) => product.id == id);

    dispatch({
      type: GET_A_PRODUCT,
      payload: dataProduct,
    });
  } catch (error) {
    dispatch({
      type: GET_A_PRODUCT_FAILURE,
      payload: error,
    });
  }
};

// export const productsActions = {
//   getAllProducts,
// };
