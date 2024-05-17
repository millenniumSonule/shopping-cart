import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, actions) => {
            state.push(actions.payload);
        },
    }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;