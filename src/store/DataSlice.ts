import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActionTypes, IStateInitial, MappedContactItem } from "../interface";

const initialState: IStateInitial = {
    data: [],
    name: null,
    isLoading: false,
    currentContact: null,
    error: '',
}
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        dataFetchingLoading (state, action: PayloadAction<boolean>): void {
            state.isLoading = action.payload;
        },
        dataFetchingError (state, action: PayloadAction<string>): void {
            state.error = action.payload;
        },
        userName (state, action: PayloadAction<string | null>): void {
            state.name = action.payload;
            state.isLoading = false;            
        },
        dataFetch (state, action: PayloadAction<[]>): void {
            state.data = action.payload;
        },
        currentContactFetch (state, action: PayloadAction<MappedContactItem>): void {
            state.currentContact = action.payload;
        }
    }
})

export default dataSlice.reducer;