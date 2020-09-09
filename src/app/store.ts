import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import createRootReducer from "./rootReducer";

export const history = createBrowserHistory();

const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

export const store = configureStore({
  reducer: createRootReducer(history),
  middleware,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
