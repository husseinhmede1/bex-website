import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
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
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import createRootReducer from "./rootReducer";

/** Browser history used for routing */
const history = createBrowserHistory();

/** Redux-persist configuration */
const persistConfig = {
  key: "root",
  version: 1,
  /** This could be any storage : AsyncStorage, etc... */
  storage,
};

/** Redux-toolkit middlewares array */
const middleware = [
  /** Default middle ware with serializable-check to support redux-persist */
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

  /** Router middleware */
  routerMiddleware(history),
];

/** Persists the combined reduxers using provided persist configuration */
const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

const store = configureStore({
  /** Combined reducers or reducers object */
  reducer: persistedReducer,

  /** Middlewares object*/
  middleware,

  /**
   * Enables devtools for redux.
   * TODO !important: remove this in production mode
   */
  devTools: true,
});

let persistor = persistStore(store);

export { history, store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
