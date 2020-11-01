import tokenReducer from "./redux/token/tokenSlice";
import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from "./redux/tasks/tasksSlice";
import {tasksState} from "./redux/tasks/tasksType";

const store= configureStore({
    reducer:{
        token:tokenReducer,
        tasks:tasksReducer,
    }
});
export type RootState = ReturnType<typeof store.getState>
export default store;
