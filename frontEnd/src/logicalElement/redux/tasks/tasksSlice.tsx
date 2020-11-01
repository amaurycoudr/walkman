import {createSlice} from "@reduxjs/toolkit";
import {FAILED, INITIAL, LOADING, SUCCEEDED} from "../../../helpers/api";
import {RootState, storeState} from "../../store";
import {TASKS_FILTER_STATE} from "./tasksConst";
import {fetchTasks} from "./tasksAsyncThunk";
import {tasksState} from "./tasksType";
import {changeFilterAction} from "./tasksActions";


const initialState: tasksState = {
    tasksList: [],
    status: INITIAL,
    filter: TASKS_FILTER_STATE,
    categories: [],
    difficulties: [],
    statesTask: []

}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        changeFilter:changeFilterAction
    },
    extraReducers: builder => {
        builder.addCase(fetchTasks.pending,
            (state, action) => {
                state.status = LOADING
            },)
        builder.addCase(fetchTasks.fulfilled,
            (state, action) => {
                state.status = SUCCEEDED
                state.tasksList = action.payload!
            },)
        builder.addCase(fetchTasks.rejected,
            (state, action) => {
                state.status = FAILED
            })

    }
})

export const {changeFilter}=tasksSlice.actions
const tasksReducer = tasksSlice.reducer
export default tasksReducer


export const tasksSelector = (state:RootState) => state.tasks

