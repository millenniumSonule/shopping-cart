import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, actions) => {
            state.push(actions.payload);
        },

        removeProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload.id);
        },

    }
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;