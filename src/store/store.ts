import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./DataSlice";

export const setupStore = configureStore({
    reducer: {dataSlice},
})

export type RootState = ReturnType<typeof setupStore.getState>
export type AppDispatch = typeof setupStore.dispatch;