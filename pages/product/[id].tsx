import MainLayout from '@components/Layouts/MainLayout';
import React from 'react';
import { wrapper } from 'src/redux/store';
import { getProduct } from '../../src/redux/actions/productsActions';
import { addProductToCart } from '../../src/redux/actions/cartActions';
import { useSelector } from 'react-redux';

import ProductDetails from '@components/ProductDetails';

const productDetails = () => {
  const { products } = useSelector((state) => state);

  return (
    <MainLayout>
      <div className="w-90">
        {products && (
          <ProductDetails productDetails={products.productDetails} currency={products.currency} />
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
