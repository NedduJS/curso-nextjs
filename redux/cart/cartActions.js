import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes';

const addToCart = (avoItem) => (dispatch, getState) => {
  const { cart } = getState();
  const include = cart.findIndex((item) => item.id === avoItem.id);

  if (include >= 0) {
    const lastQuantity = cart[include].quantity;
    const newQuantity = avoItem.quantity;
    cart[include] = { ...avoItem, quantity: lastQuantity + newQuantity };
    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  } else {
    cart.push(avoItem);
    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  }
};

export { addToCart };
