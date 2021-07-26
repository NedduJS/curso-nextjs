import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
