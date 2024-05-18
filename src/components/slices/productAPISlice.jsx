import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data:[],
};

export const productAPISlice = createSlice({
    name: "products",
    initialState,
    reducers: {

        setProducts(state, action) {
            state.data = action.payload;
        }
    }
});

export const { setProducts } = productAPISlice.actions;
export default productAPISlice.reducer;

export function getProducts() {
    return async function getProductsThunk(dispatch,getState) {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products`);
            const result = response.data;
            dispatch(setProducts(result));
        } catch (error) {
            console.error("Failed to fetch products: ", error);
        }
    }
}