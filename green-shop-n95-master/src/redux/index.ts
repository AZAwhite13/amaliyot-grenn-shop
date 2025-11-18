import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";
import product_slice from "./product-slice";

export const store = configureStore({
  reducer: {
    modalSlice,
    product_slice,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

// type alieses
