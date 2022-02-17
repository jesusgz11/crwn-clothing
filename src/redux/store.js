import { applyMiddleware, createStore } from 'redux';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { store, persistor };
