import { ADD_PRODUCT_TO_CART, ADD_PRODUCT_CART_FAILURE } from '../constants/cartConstants';

var _ = require('lodash');

export const addProductToCart = (product) => async (dispatch) => {
  try {
    let fromCartProducts = JSON.parse(localStorage.getItem('amazinCart')) || [];
    const productCart = _.find(fromCartProducts, { id: product.id });
    // console.log('filteredProducts', filteredProducts);
    if (productCart) {
      const filteredProducts = fromCartProducts.filter((item) => item.id !== productCart.id);
      productCart.cartQuantity += 1;
      productCart.available_quantity -= 1;
      // console.log('filteredProducts', filteredProducts);
      // console.log([filteredProducts, ...productCarts]);
      localStorage.setItem('amazinCart', JSON.stringify([...filteredProducts, productCart]));
      // const dataProducts = JSON.parse(JSON.stringify({filteredProducts, ...productCarts}));

      console.log([...filteredProducts, productCart]);
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: [...filteredProducts, productCart],
      });
    } else {
      product.cartQuantity = 1;
      product.available_quantity -= 1;
      const newProductCart = [...fromCartProducts, product];
      localStorage.setItem('amazinCart', JSON.stringify(newProductCart));
      // const dataProducts = JSON.parse(JSON.stringify(newProductCart));
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: newProductCart,
      });
    }

    // console.log(newProduct);

    // wax-on wax-off
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_CART_FAILURE,
      payload: error,
    });
  }
};

export const removeProductFromCart = (req, product) => async (dispatch) => {
  try {
    let fromCartProducts = JSON.parse(localStorage.getItem('amazinCart'));

    const newProduct = fromCartProducts.filter((item) => item.id !== product.id);
    const dataProducts = JSON.parse(JSON.stringify(newProduct));

    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: dataProducts,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_CART_FAILURE,
      payload: error,
    });
  }
};

// load form cart
export const loadCart = () => async (dispatch) => {
  let fromCartProducts = JSON.parse(localStorage.getItem('amazinCart'));
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: fromCartProducts,
  });
};
