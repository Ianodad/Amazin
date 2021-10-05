import MainLayout from '@components/Layouts/MainLayout';
import React from 'react';
import { wrapper } from 'src/redux/store';
import { getProduct } from '../../src/redux/actions/productsActions';
import { addProductToCart } from '../../src/redux/actions/cartActions';
import { useSelector } from 'react-redux';

import ProductDetails from '@components/ProductDetails';
import ProductDetailLoader from '../../src/utils/Loaders/productDetailsLoader';

const productDetails = () => {
  const { products } = useSelector((state) => state);

  return (
    <MainLayout>
      <div className="container flex justify-center">
        {!products ? (
          <div className="self-center">
            <ProductDetailLoader />
          </div>
        ) : (
          <div className="mx-auto">
            <ProductDetails productDetails={products.productDetails} currency={products.currency} />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  // const { store } = context;
  await store.dispatch(getProduct(req, params.id));
});

export default productDetails;
