import React from 'react';
import { connect } from 'react-redux';

import CartEmpty from '@components/CartEmpty';
import CartItem from '@components/CartItem';

const cart = ({ cartList, nItems }) => {
  return (
    <div className='cart'>
      {cartList.length === 0 ? (
        <CartEmpty />
      ) : (
        cartList.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })
      )}
      <div className='cart__summary'>
        <p className='cart__summary--total'>Sub total: {nItems}</p>
        <p className='cart__summary--check'>Check out</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return { cartList: cart.cartList, nItems: cart.nItems };
};

export default connect(mapStateToProps, null)(cart);
