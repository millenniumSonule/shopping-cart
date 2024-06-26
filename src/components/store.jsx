import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { configure } from "@testing-library/react";
import productAPISlice from './slices/productAPISlice'
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productAPISlice,
    }
});