import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./Reducer";

export const store = configureStore({
    reducer: {
        cars: cardReducer
    }
});
