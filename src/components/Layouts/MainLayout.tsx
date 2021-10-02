import React, { FC, useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Cart from '../Cart';
import { loadCart } from '../../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

const MainLayout: FC = ({ children }) => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center align-middle text-center">
      <Navbar cart={cart} />
      {children}
      <Cart cart={cart} />
    </div>
  );
};

export default MainLayout;
