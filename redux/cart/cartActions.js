import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes';

const addToCart = (avoItem) => (dispatch, getState) => {
  const {
    cart: { cartList },
  } = getState();
  const include = cartList.findIndex((item) => item.id === avoItem.id);

  if (include >= 0) {
    const lastQuantity = cartList[include].quantity;
    const newQuantity = avoItem.quantity;
    cartList[include] = { ...avoItem, quantity: lastQuantity + newQuantity };
    dispatch({
      type: ADD_TO_CART,
      payload: cartList,
    });
  } else {
    cartList.push(avoItem);
    dispatch({
      type: ADD_TO_CART,
      payload: cartList,
    });
  }
};

const removeFromCart = (itemId) => (dispatch, getState) => {
  const {
    cart: { cartList },
  } = getState();

  const itemIndex = cartList.findIndex((item) => item.id === itemId);
  let newQuantity;
  if (cartList[itemIndex].quantity) {
    newQuantity = cartList[itemIndex].quantity - 1;
  }

  if (newQuantity === 0) {
    cartList.splice(itemIndex, 1);
    dispatch({
      type: REMOVE_FROM_CART,
      payload: cartList,
    });
  } else {
    const reducedItem = { ...cartList[itemIndex], quantity: newQuantity };
    cartList[itemIndex] = reducedItem;
    dispatch({
      type: REMOVE_FROM_CART,
      payload: cartList,
    });
  }
};

export { addToCart, removeFromCart };
