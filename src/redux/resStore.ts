import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/RootsliceRes";

const resStore = configureStore({
  reducer,
  devTools: true,
});

export default resStore;
