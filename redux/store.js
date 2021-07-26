import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import avoReducers from './avo/avoReducers';

import { getAvo } from './avo/avoActions';

const root_reducer = combineReducers({
  avo: avoReducers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const generateStore = () => {
  const store = createStore(
    root_reducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  getAvo()(store.dispatch);
  return store;
};

export default generateStore;
