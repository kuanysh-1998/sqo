import { combineReducers, configureStore } from "@reduxjs/toolkit";
import serviceSlice from "./reducers/serviceSlice";
import singleServiceSlice from "./reducers/singleServiceSlice";

const rootReducer = combineReducers({
  serviceSlice,
  singleServiceSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
