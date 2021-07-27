import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes';

const initialState = { cartList: [], nItems: 0 };

const reducer = (state = initialState, action) => {
  let count = 0;
  switch (action.type) {
    case ADD_TO_CART:
      if (action.payload.length > 1) {
        const reduced = action.payload.reduce((r, a) => {
          return r + a.quantity;
        }, 0);
        console.log(reduced);
        count = reduced;
      } else {
        count = action.payload[0].quantity;
      }
      return {
        ...state,
        cartList: action.payload,
        nItems: count,
      };
    case REMOVE_FROM_CART:
      if (action.payload.length > 1) {
        const reduced = action.payload.reduce((r, a) => {
          return r + a.quantity;
        }, 0);
        console.log(reduced);
        count = reduced;
      } else {
        count = 0;
      }
      return { ...state, cartList: action.payload, nItems: count };
    default:
      return state;
  }
};

export default reducer;
