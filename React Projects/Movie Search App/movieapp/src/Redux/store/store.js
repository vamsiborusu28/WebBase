import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "../features/filmSlice";
export const store=configureStore({
    reducer:{
        film:filmSlice,
    }
});
