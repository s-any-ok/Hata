import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import rootReducer from "./reducers"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootSaga } from "./saga"

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: "root",
    storage,
    whitelist: ['app', 'auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

let persistor = persistStore(store);

sagaMiddleware.run(rootSaga)
const dispatch = store.dispatch;
export { store, persistor, dispatch }
