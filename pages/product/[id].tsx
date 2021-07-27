import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { connect } from 'react-redux';
import { UilShoppingCartAlt } from '@iconscout/react-unicons';

import { addToCart } from '@store/cart/cartActions';

export const getStaticPaths = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo');
  const { data }: TAPIAvoResponse = await response.json();

  const paths = data.map(({ id }) => ({ params: { id } }));

  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
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

const ProductItem = ({ addToCart, product }) => {
  const router = useRouter();
  const productID = router.query.id;

  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart({ ...product, quantity });
  };

  return (
    <div>
      <div>
        <Image src={product.image} width='300' height='300' />
        <div>
          <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.sku}</p>
          </div>
          <form action='' onSubmit={handleSubmit}>
            <input
              type='number'
              step='1'
              placeholder='0'
              min='0'
              value={quantity}
              onChange={handleChange}
            />
            <button>
              <UilShoppingCartAlt /> Add to Cart
            </button>
          </form>
        </div>
      </div>
      <h2>About this avocado</h2>
      <p>{product.attributes.description}</p>
      <table>
        <thead>
          <th>Attributes</th>
        </thead>
        <tbody>
          <tr>
            <td>Shape</td>
            <td>{product.attributes.shape}</td>
          </tr>
          <tr>
            <td>Hardiness</td>
            <td>{product.attributes.hardiness}</td>
          </tr>
          <tr>
            <td>Taste</td>
            <td>{product.attributes.taste}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ avo }) => {
  return {
    avoList: avo.avoList,
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
