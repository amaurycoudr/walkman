import {createSlice, PayloadAction} from "@reduxjs/toolkit";
interface tokenState{
    token:string
}
export const tokenSlice = createSlice(
    {
        name:'token',
        initialState: 'test' as string,
        reducers: {
            setToken: (state, action:PayloadAction<string>) => {
                return  action.payload
            }
        },
    }
);
export const selectToken=(state:tokenState)=>state.token
export const {setToken}=tokenSlice.actions
const tokenReducer=tokenSlice.reducer
export default tokenReducer