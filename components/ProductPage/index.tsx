import React, { useState } from 'react';
import { connect } from 'react-redux';
import Image from 'next/image';
import { UilShoppingCartAlt } from '@iconscout/react-unicons';

import { addToCart } from '@store/cart/cartActions';

import styles from './ProductPage.module.css';

const ProductPage = ({ product, addToCart }) => {
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
    <div className={styles.ProductPage}>
      <div className={styles.Productshop}>
        <div className={styles.ProductImage}>
          <Image src={product.image} width='300' height='300' />
        </div>
        <div className={styles.ShopInformation}>
          <div>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.sku}>SKU: {product.sku}</p>
          </div>
          <form action='' onSubmit={handleSubmit} className={styles.form}>
            <input
              type='number'
              step='1'
              placeholder='0'
              min='0'
              value={quantity}
              onChange={handleChange}
              className={styles.input}
            />
            <button className={styles.button}>
              <UilShoppingCartAlt /> Add to Cart
            </button>
          </form>
        </div>
      </div>
      <h2 className={styles.about}>About this avocado</h2>
      <p className={styles.description}>{product.attributes.description}</p>
      <table className={styles.table}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
