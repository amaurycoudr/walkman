import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";


export const tokenSlice = createSlice(
    {
        name: 'token',
        initialState: '165ab38c016b06383f35793e31e3cdb84003a0d3' as string | null,
        reducers: {
            setToken: (state, action: PayloadAction<string>) => {
                return action.payload
            }
        },
    }
);
export const selectToken = (state:RootState) => state.token
export const {setToken} = tokenSlice.actions
const tokenReducer = tokenSlice.reducer
export default tokenReducer