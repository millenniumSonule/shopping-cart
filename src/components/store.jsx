import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { configure } from "@testing-library/react";

export const store = configureStore({
    reducer: {cart: cartReducer}
});