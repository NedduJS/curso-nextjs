import React from 'react';
import Image from 'next/image';
import { connect } from 'react-redux';

import useWindowSize from '../../utils/useWindowSize';
import { removeFromCart } from '@store/cart/cartActions';

import styles from './CartItem.module.css';

const CartItem = ({ id, name, quantity, price, image, removeFromCart }) => {
  const { width } = useWindowSize();

  const handleClick = () => {
    removeFromCart(id);
  };

  return (
    <div className={styles.CartItem}>
      <Image
        src={image}
        width={width > 500 ? '150' : '300'}
        height={width > 500 ? '150' : '300'}
      />
      <div className={styles.ProductInfo}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.quantity}>
          {quantity} x {price}
        </p>
        <p>Some more information goes here....</p>
        <button onClick={handleClick} className={styles.removeBtn}>
          <b>x</b>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(null, mapDispatchToProps)(CartItem);
