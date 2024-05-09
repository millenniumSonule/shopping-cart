import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:10};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            // alert(JSON.stringify(state))
            state.value = state.value + 1;
        },

        decrement: (state) => {
            // alert(JSON.stringify(state))
            state.value = state.value - 1;
        },
        
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
