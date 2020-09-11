import { createSlice } from "@reduxjs/toolkit";

import { Login } from "./login.type";

/**
 * Initial state object
 */
const initialState: Login = {};

/**
 * Feature slice Object
 * Automatically generates actions as per reducers
 */
const loginSlice = createSlice({
  /**
   * Unique feature name
   */
  name: "login",

  /**
   * Initial state object
   */
  initialState: initialState,

  /**
   * Reducers are functions that determine changes to an application's state.
   * They can have two forms:
   *
   * 1- Modify the state by providing key-value pairs, ex:
   *
   *    setCounter: (state, action) => {
   *      return { ...state, ...action.payload };
   *    }
   *
   * 2- Apply mutating logic to part of the state.
   *    Note that this is possible using 'Immer', ex:
   *
   *    decrementCounter: (state) => {
   *      state.value -= 1;
   *    }
   */
  reducers: {
    setLogin: (state, action) => {
      return { ...state, ...action.payload };
    },
    reset: () => initialState,
    // Add here extra reducers
    // ...
  },
});

/**
 * Reducers are exported so they could be added to store
 */
export const loginReducer = loginSlice.reducer;

/**
 * Actions hold the same names as reducers. Actions can be dispached using
 * 'useDispacth' hook, or by 'mapDispatchToProps' in the redux 'connect' function
 */
export const loginActions = { ...loginSlice.actions };
