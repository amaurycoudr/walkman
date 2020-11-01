import {createAsyncThunk} from "@reduxjs/toolkit";
import {BASE_URL} from "../../../helpers/api";
import axios from "axios";
import {taskType} from "./tasksType";

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (token:string) => {
    try {
        const tasksUrl = BASE_URL + 'tasks/'
        const result = await axios.get(tasksUrl, {headers: {authorization: `Token ${token}`}})
        return result.data as taskType[]
    } catch (err
        ) {
        console.log(err)
    }
})