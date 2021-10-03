import React from 'react';
import CartCard from './CartCard';
import { closeCart, loadCart } from '../../redux/actions/cartActions';

import { wrapper } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

// import
const index = () => {
  const dispatch = useDispatch();

  const { cartState, products } = useSelector((state) => state);
  const { cart, cartPosition } = cartState;
  const { currency } = products;
  console.log('cart', cartPosition);
  const currencyType = cart[0]?.prices[currency]?.currency;
  console.log(currencyType);
  const onCloseCart = () => {
    dispatch(closeCart());
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      if (item.cartQuantity > 0) {
        total += item.prices[currency].price * item.cartQuantity;
      } else {
        total += item.prices[currency].price;
      }
    });
    return total;
  };
  return (
    <div
      className={`fixed inset-0 overflow-hidden z-20 ${cartPosition ? '' : 'hidden'}`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/*
Background overlay, show/hide based on slide-over state.

Entering: "ease-in-out duration-500"
  From: "opacity-0"
  To: "opacity-100"
Leaving: "ease-in-out duration-500"
  From: "opacity-100"
  To: "opacity-0"
    */}
        <div
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          {/*
  Slide-over panel, show/hide based on slide-over state.

  Entering: "transform transition ease-in-out duration-500 sm:duration-700"
    From: "translate-x-full"
    To: "translate-x-0"
  Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
    From: "translate-x-0"
    To: "translate-x-full"
*/}
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                    Shopping cart
                  </h2>
                  <div className="ml-3 h-7 flex items-center">
                    <button
                      onClick={() => onCloseCart()}
                      type="button"
                      className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Close panel</span>
                      {/* Heroicon name: outline/x */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {cart &&
                        cart.map((item, index) => {
                          return <CartCard key={index} product={item} currency={currency} />;
                        })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  {cart && <p>{`${currencyType} ${calculateTotal()}`}</p>}
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Checkout
                  </a>
                </div>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                  <p>
                    or{' '}
                    <button
                      onClick={() => onCloseCart()}
                      type="button"
                      className="text-indigo-600 font-medium hover:text-indigo-500"
                    >
                      Continue Shopping<span aria-hidden="true"> →</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  // const { store } = context;
  await store.dispatch(loadCart());
});
export default index;
