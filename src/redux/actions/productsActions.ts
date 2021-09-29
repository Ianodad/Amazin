import { GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_FAILURE } from '../constants/productsConstants';
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

// export const productsActions = {
//   getAllProducts,
// };
