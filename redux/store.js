import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import avoReducers from './avo/avoReducers';

import { getAvo } from './avo/avoActions';

const rootReducer = combineReducers({
  avo: avoReducers,
});

const generateStore = () => {
  const middlewareEnhancer = applyMiddleware(thunk);
  const composeEnhancers = composeWithDevTools(middlewareEnhancer);
  const store = createStore(rootReducer, composeEnhancers);

  getAvo()(store.dispatch);
  return store;
};

export default generateStore;
