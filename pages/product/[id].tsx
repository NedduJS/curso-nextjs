import React from 'react';

import ProductPage from '@components/ProductPage';

export const getStaticPaths = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo');
  const { data }: TAPIAvoResponse = await response.json();

  const paths = data.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://platzi-avo.vercel.app/api/avo/${params?.id}`
  );
  const product = await response.json();

  return { props: { product } };
};

const ProductItem = ({ product }) => {
  return <ProductPage product={product} />;
};

export default ProductItem;
