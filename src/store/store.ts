import {
  createStore,
  applyMiddleware,
  combineReducers,
  Middleware,
} from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import cart from './reducer/cart';

const combinedReducer = combineReducers({
  cart,
});

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    const logger = createLogger({ collapsed: true });
    return composeWithDevTools(applyMiddleware(...middleware, logger));
  }

  return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }: any) => {
  if (isServer) {
    return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
  } else {
    const { persistStore, persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = { key: 'root', whitelist: ['cart'], storage };

    const persistedReducer = persistReducer(persistConfig, combinedReducer);

    const store = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
    );

    store.__persistor = persistStore(store);

    return store;
  }
};

export const wrapper = createWrapper(makeStore);
