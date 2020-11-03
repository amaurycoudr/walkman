import {createSlice} from "@reduxjs/toolkit";
import {INITIAL} from "../../../helpers/api";
import {RootState} from "../../store";
import {TASKS_FILTER_STATE} from "./tasksConst";
import {createTask, fetchCategories, fetchDifficulties, fetchTasks, updateTask} from "./tasksAsyncThunk";
import {tasksState} from "./tasksType";
import {
    changeFilterAction,
    editTaskAction,
    focusTaskAction,
    initEditTaskAction,
    initFocusTaskAction,
    addPodcastFetch,
    apiCallFailed,
    apiCallLoading,
    addPodcast
} from "./tasksActions";


const initialState: tasksState = {
    tasksDict: {},
    status: INITIAL,
    filter: TASKS_FILTER_STATE,
    categories: [],
    difficulties: [],
    statesTask: [],
    taskFocus: null,
    taskEdit: null,
    edit: {},
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        changeFilter: changeFilterAction,
        editTask: editTaskAction,
        initEditTask: initEditTaskAction,
        focusTask: focusTaskAction,
        initFocusTask: initFocusTaskAction
    },
    extraReducers: builder => {
        //fetchTasks
        builder.addCase(fetchTasks.pending,
            apiCallLoading)
        builder.addCase(fetchTasks.fulfilled,
            addPodcastFetch)
        builder.addCase(fetchTasks.rejected,
            apiCallFailed)

        //fetchCategories
        builder.addCase(fetchCategories.fulfilled, ((state, action) => {
                state.categories = action.payload!
            })
        )
        //fetchDifficulties
        builder.addCase(fetchDifficulties.fulfilled, ((state, action) => {
                state.difficulties = action.payload!
            })
        )

        //updateTask
        builder.addCase(updateTask.fulfilled,
            addPodcast)

        //createTask
        builder.addCase(createTask.fulfilled,
            addPodcast)
    }

})

export const {changeFilter, editTask, initEditTask, focusTask, initFocusTask} = tasksSlice.actions
const tasksReducer = tasksSlice.reducer
export default tasksReducer


export const tasksSelector = (state: RootState) => state.tasks

