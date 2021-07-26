import { GET_AVO, GET_AVO_SUCCESS, GET_AVO_ERROR } from './avoTypes';

const getAvo = () => async (dispatch) => {
  dispatch({
    type: GET_AVO,
  });
  try {
    const response = await fetch('/api/avo');
    const { data } = await response.json();

    dispatch({
      type: GET_AVO_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: GET_AVO_ERROR,
      payload: 'There was an error',
    });
  }
};

export { getAvo };
