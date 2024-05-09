    import { configureStore } from "@reduxjs/toolkit";
    import counterRedcuer from '../features/counterSlice'

    export const store = configureStore({
    reducer: {counter: counterRedcuer},
    });