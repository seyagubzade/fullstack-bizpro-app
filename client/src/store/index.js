import { configureStore } from "@reduxjs/toolkit";
import { aboutReducer } from "./about/aboutSlice";

const store = configureStore({
    reducer: {
        about: aboutReducer,
    }
})

export default store;