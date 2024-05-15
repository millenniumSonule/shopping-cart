import { createSlice } from "@reduxjs/toolkit";

const initialState = {data:{}};

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addProduct: (state) => {
            
        },
    }
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;