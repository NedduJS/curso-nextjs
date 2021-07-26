import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { connect } from 'react-redux';
import { UilShoppingCartAlt } from '@iconscout/react-unicons';

import { addToCart } from '@store/cart/cartActions';

const ProductItem = ({ avoList, addToCart }) => {
  const router = useRouter();
  const productID = router.query.id;
  const newProduct = avoList.find((item) => item.id === productID);

  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart({ ...newProduct, quantity });
  };

  return (
    <div>
      <div>
        <Image src={newProduct.image} width='300' height='300' />
        <div>
          <div>
            <p>{newProduct.name}</p>
            <p>{newProduct.price}</p>
            <p>{newProduct.sku}</p>
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
      <p>{newProduct.attributes.description}</p>
      <table>
        <thead>
          <th>Attributes</th>
        </thead>
        <tbody>
          <tr>
            <td>Shape</td>
            <td>{newProduct.attributes.shape}</td>
          </tr>
          <tr>
            <td>Hardiness</td>
            <td>{newProduct.attributes.hardiness}</td>
          </tr>
          <tr>
            <td>Taste</td>
            <td>{newProduct.attributes.taste}</td>
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
