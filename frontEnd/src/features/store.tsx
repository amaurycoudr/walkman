import tokenReducer from "./token/redux/tokenSlice";
import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from "./tasks/redux/tasksSlice";


const store= configureStore({
    reducer:{
        token:tokenReducer,
        tasks:tasksReducer,
    }
});
export type RootState = ReturnType<typeof store.getState>
export default store;
