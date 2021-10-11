import React, { FC, useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeCart, loadCart, openCart } from '../../redux/actions/cartActions';
import { changeCurrency } from '../../redux/actions/productsActions';
import Cart from '../Cart';
import Navbar from '../Navbar';

const MainLayout: FC = ({ children }) => {
  const dispatch = useDispatch();

  const { cartState, products } = useSelector((state) => state);
  const { cart } = cartState;
  const { currency } = products;

  useEffect(() => {
    dispatch(loadCart());
    // dispatch(closeCart());
  }, [dispatch]);

  const onCart = () => {
    dispatch(openCart());
  };

  const onChangeCurrency = ({ value }) => {
    dispatch(changeCurrency(value));
  };
  return (
    <div className="flex flex-col justify-center align-middle text-center">
      <Navbar
        cart={cart}
        currency={currency}
        onOpenCart={() => onCart()}
        changeCurrency={onChangeCurrency}
      />
      {children}
      <Cart />
    </div>
  );
};

export default MainLayout;
