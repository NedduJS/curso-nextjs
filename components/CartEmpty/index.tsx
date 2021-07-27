import React from 'react';

import styles from './CartEmpty.module.css';

const CartEmpty = () => {
  return (
    <div className={styles.CartEmpty}>
      <h2>Your cart is empty</h2>
      <p>
        You will need to add some items to the cart before you can checkout.
      </p>
    </div>
  );
};

export default CartEmpty;
