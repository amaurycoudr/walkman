import {createAsyncThunk} from "@reduxjs/toolkit";
import {BASE_URL} from "../../../helpers/api";
import axios from "axios";
import {category, difficulty, editTaskType, taskType, taskTypeApiResult} from "./tasksType";
import {RootState} from "../../store";

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (token: string) => {
    try {
        const tasksUrl = BASE_URL + 'tasks/'
        const result = await axios.get(tasksUrl, {headers: {authorization: `Token ${token}`}})
        return result.data as taskTypeApiResult[]
    } catch (err
        ) {
        console.log(err)
    }
})
export const updateTask = createAsyncThunk<taskTypeApiResult | undefined,
    string,
    { state: RootState }>('tasks/updateTask',
    async (token: string, thunkApi) => {
        const edit = thunkApi.getState().tasks.edit
        const id = thunkApi.getState().tasks.taskEdit
        try {
            const tasksUrl = `${BASE_URL}tasks/${id}/`
            const result = await axios.patch(tasksUrl, edit, {headers: {authorization: `Token ${token}`}})
            return result.data as taskTypeApiResult
        } catch (err
            ) {

        }
    })
export const createTask = createAsyncThunk<taskTypeApiResult | undefined,
    taskType,
    { state: RootState }>('tasks/createTask',
    async (newTask: taskType, thunkApi) => {
        const token = thunkApi.getState().token
        try {
            const tasksUrl = `${BASE_URL}tasks/`
            const result = await axios.post(tasksUrl, newTask, {headers: {authorization: `Token ${token}`}})
            return result.data as taskTypeApiResult
        } catch (err
            ) {

        }
    })
export const fetchCategories = createAsyncThunk('tasks/fetchCategories', async () => {
    try {
        const tasksUrl = BASE_URL + 'tasks/'
        const result = await axios.get(tasksUrl + 'categories',)
        return result.data as category[]
    } catch (err
        ) {
        console.log(err)
    }
})
export const fetchDifficulties = createAsyncThunk('tasks/fetchDifficulties', async () => {
    try {
        const tasksUrl = BASE_URL + 'tasks/'
        const result = await axios.get(tasksUrl + 'difficulties',)
        return result.data as difficulty[]
    } catch (err
        ) {
        console.log(err)
    }
})