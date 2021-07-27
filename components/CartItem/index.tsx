import React from 'react';
import Image from 'next/image';
import { connect } from 'react-redux';

import useWindowSize from '../../utils/useWindowSize';
import { removeFromCart } from '@store/cart/cartActions';

const CartItem = ({ id, name, quantity, price, image, removeFromCart }) => {
  const { width } = useWindowSize();

  const handleClick = () => {
    removeFromCart(id);
  };

  return (
    <div>
      <Image
        src={image}
        width={width > 500 ? '150' : '300'}
        height={width > 500 ? '150' : '300'}
      />
      <div>
        <h2>{name}</h2>
        <p>
          {quantity} x {price}
        </p>
        <p>Some more information goes here....</p>
        <button onClick={handleClick}>
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
