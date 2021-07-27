import React from 'react';
import { connect } from 'react-redux';

import CartEmpty from '@components/CartEmpty';
import CartItem from '@components/CartItem';

const cart = ({ cartList, nItems }) => {
  return (
    <div>
      {cartList.length === 0 ? (
        <CartEmpty />
      ) : (
        cartList.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })
      )}
      <div>
        <p>
          <b>Sub total: {nItems}</b>
        </p>
        <p>Check out</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return { cartList: cart.cartList, nItems: cart.nItems };
};

export default connect(mapStateToProps, null)(cart);
