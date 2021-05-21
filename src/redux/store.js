//import { combineReducers } from "redux";
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import appReducer from "./app/app-reducer";

console.log(getDefaultMiddleware());
/* const rootReducer = combineReducers({
  app: appReducer,
}); */
//console.log(process.env);
//const store = createStore(rootReducer, composeWithDevTools());
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

/* const rootReducer = combineReducers({
  app: appReducer,
});
 */
const persistConfig = {
  key: "app",
  storage,
  blacklist: ["filter"],
};

//const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: { app: persistReducer(persistConfig, appReducer) },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);
export default { store, persistor };
