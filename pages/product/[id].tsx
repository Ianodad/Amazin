import MainLayout from '@components/Layouts/MainLayout';
import ProductDetails from '@components/ProductDetails';
import React from 'react';
import { useSelector } from 'react-redux';
import { wrapper } from 'src/redux/store';

import { addProductToCart } from '../../src/redux/actions/cartActions';
import { getProduct } from '../../src/redux/actions/productsActions';
import ProductDetailLoader from '../../src/utils/Loaders/productDetailsLoader';

const productDetails = () => {
  const { products } = useSelector((state) => state);

  console.log(products);
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
