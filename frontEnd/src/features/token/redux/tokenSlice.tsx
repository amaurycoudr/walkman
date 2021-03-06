// thib : 2fbefd1d425499b20b061dd11e18bd60264b1030
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = null as string | null

export const tokenSlice = createSlice(
    {
        name: 'token',
        //initialState: null as string | null,
        initialState: "ba19953fce61d6e57fb2e44ede032c2f315276b4" as string | null,

        reducers: {
            setToken: (state, action: PayloadAction<string>) => {
                return action.payload
            },
            initTokenState: (state) => {
                return initialState
            }
        },
    }
);
export const selectToken = (state: RootState) => state.token
export const { setToken, initTokenState } = tokenSlice.actions
const tokenReducer = tokenSlice.reducer
export default tokenReducer