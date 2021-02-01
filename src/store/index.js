import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';

// Reducers
import rootReducer from './reducers';

// Configs
const persistConfig = {
  key: 'chuck-norris',
  storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};

let middleware;
if (process.env.NODE_ENV === 'development') {
  middleware = applyMiddleware(thunk, logger);
} else {
  middleware = applyMiddleware(thunk);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
const store = createStore(
  persistedReducer, 
  initialState, 
  composeEnhancers(
    middleware
  )
);

// Persistor
const persistor = persistStore(store);

// Export
export { store, persistor };