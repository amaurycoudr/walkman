import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";


export const tokenSlice = createSlice(
    {
        name: 'token',
        initialState: 'b5d1ec6390146728049d67810d9f452ffbe0f9df' as string | null,
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