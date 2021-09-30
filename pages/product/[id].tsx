import MainLayout from '@components/Layouts/MainLayout';
import React from 'react';
import { wrapper } from 'src/redux/store';
import { getProduct } from '../../src/redux/actions/productsActions';

import ProductDetails from '@components/ProductDetails';
import { useSelector } from 'react-redux';

const productDetails = () => {
  const { products } = useSelector((state) => state);

//   console.log(products.productDetails);

  return (
    <MainLayout>
      <ProductDetails productDetails={products.productDetails} />
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  // const { store } = context;
  await store.dispatch(getProduct(req, params.id));
});

export default productDetails;
