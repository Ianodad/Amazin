import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductDetailsLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={700}
    viewBox="0 0 1000 700"
    backgroundColor="#bdbdbd"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="13" y="87" rx="15" ry="15" width="770" height="550" />
    <rect x="49" y="132" rx="0" ry="0" width="278" height="271" />
  </ContentLoader>
);

export default ProductDetailsLoader;
