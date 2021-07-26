import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import avoReducers from './avo/avoReducers';
import cartReducers from './cart/cartReducer';

import { getAvo } from './avo/avoActions';

const rootReducer = combineReducers({
  avo: avoReducers,
  cart: cartReducers,
});

const generateStore = () => {
  const middlewareEnhancer = applyMiddleware(thunk);
  const composeEnhancers = composeWithDevTools(middlewareEnhancer);
  const store = createStore(rootReducer, composeEnhancers);

  getAvo()(store.dispatch);
  return store;
};

export default generateStore;
