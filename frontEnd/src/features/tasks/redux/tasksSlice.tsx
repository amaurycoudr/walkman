
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store";
import {initialTaskState} from "../tasksConst";
import {createTask, fetchCategories, fetchDifficulties, fetchTasks, updateTask} from "./tasksAsyncThunk";

import {
    addTask,
    addTasksFetch,
    apiCallFailed,
    apiCallLoading,
    changeFilterAction,
    focusTaskAction,
    initEditTaskAction,
    initFocusTaskAction,
    initTaskStateAction
} from "./tasksActions";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTaskState,
    reducers: {
        changeFilter: changeFilterAction,
        initEditTask: initEditTaskAction,
        focusTask: focusTaskAction,
        initFocusTask: initFocusTaskAction,
        initTaskState: initTaskStateAction
    },
    extraReducers: builder => {
        //fetchTasks
        builder.addCase(fetchTasks.pending,
            apiCallLoading)
        builder.addCase(fetchTasks.fulfilled,
            addTasksFetch)
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
            addTask)

        //createTask
        builder.addCase(createTask.fulfilled,
            addTask)
    }

})

export const { changeFilter, initEditTask, focusTask, initFocusTask, initTaskState } = tasksSlice.actions
const tasksReducer = tasksSlice.reducer
export default tasksReducer

export const tasksStatusSelector = (state: RootState) => state.tasks.status
export const tasksFilterSelector = (state: RootState) => state.tasks.filter
export const tasksDifficultiesSelector = (state: RootState) => state.tasks.difficulties
export const tasksEditableSelector = (state: RootState) => state.tasks.taskEdit
export const tasksCategoriesSelector = (state: RootState) => state.tasks.categories
export const tasksTasksSelector = (state: RootState) => state.tasks.tasksDict
export const tasksTitleSelector = (state: RootState) => {
    const result = [] as string[];
    Object.values(state.tasks.tasksDict).forEach(
        value => {
            result.push(value.title)
        }
    )
    return result;
}

