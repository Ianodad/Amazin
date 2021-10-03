import { NextPage } from 'next/types';
import { GetServerSidePropsContext } from 'next';

// import Button from '@mui/material/Button';
// import Button from '@material-ui/core/Button';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';

import { wrapper } from '../src/redux/store';
// import actions;
import { getAllProducts } from '../src/redux/actions/productsActions';
import MainLayout from 'src/components/Layouts/MainLayout';
import  ProductCard  from '../src/components/ProductCard';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';

export interface ServerSidePropsContext extends GetServerSidePropsContext {
  store: any;
}
// const { getAllProducts } = productsActions;
const Home: NextPage = (props) => {
  // {console.log(props)}
  const { products, currency } = useSelector((state) => state.products);
  // console.log('products', products);
  return (
    <>
      <MainLayout>
        <main>
          <div className="container mt-10 grid grid-cols-3 gap-4 mx-auto">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} currency={currency} />
              ))}
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  // const { store } = context;
  await store.dispatch(getAllProducts(req));
});
export default Home;
