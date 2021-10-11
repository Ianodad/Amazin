// import Button from '@mui/material/Button';
// import Button from '@material-ui/core/Button';
import { GetServerSidePropsContext, NextPage } from 'next';
import { useSelector } from 'react-redux';
import MainLayout from 'src/components/Layouts/MainLayout';

import ProductCard from '../src/components/ProductCard';
// import actions;
import { getAllProducts } from '../src/redux/actions/productsActions';
import { wrapper } from '../src/redux/store';
import ProductsLoader from '../src/utils/Loaders/productsLoader';

// const { getAllProducts } = productsActions;
const Home: NextPage = () => {
  // {console.log(props)}
  const { products: allProducts } = useSelector((state: any) => state);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { products, currency } = allProducts;
  // console.log('products', products);

  return (
    <>
      <MainLayout>
        <main>
          <div className="container mt-10 grid grid-cols-3 gap-4 mx-auto">
            {products.length === 0 ? (
              <ProductsLoader />
            ) : (
              products.map((product) => (
                <ProductCard key={product.id} product={product} currency={currency} />
              ))
            )}
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
