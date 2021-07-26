import { GET_AVO, GET_AVO_SUCCESS, GET_AVO_ERROR } from './avoTypes';

const initialState = {
  avoList: [],
  fetching: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AVO:
      return { ...state, fetching: true };
    case GET_AVO_SUCCESS:
      return { ...state, avoList: action.payload, fetching: false };
    case GET_AVO_ERROR:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
