import {CaseReducer, PayloadAction} from "@reduxjs/toolkit";
import {editTaskType, tasksDictType, tasksState, taskType, taskTypeApiResult} from "./tasksType";
import {filterType} from "./tasksType";
import {FAILED, LOADING, SUCCEEDED} from "../../../helpers/api";

export const changeFilterAction: CaseReducer<tasksState, PayloadAction<filterType>> = (state, action) => {
    return ({
        ...state, filter: action.payload
    })
}
export const editTaskAction: CaseReducer<tasksState, PayloadAction<editTaskType>> = (state, action) => {
    return ({
        ...state, edit: Object.assign({...state.edit}, action.payload)
        //...state, edit: {...state.edit, ...action.payload} :)
    })
}
export const initEditTaskAction: CaseReducer<tasksState, PayloadAction<number | null>> = (state, action) => {
    return ({
        ...state, edit: {}, taskEdit: action.payload
    })
}
export const focusTaskAction: CaseReducer<tasksState, PayloadAction<number>> = (state, action) => {
    return ({
        ...state, edit: {}, taskEdit: null, taskFocus: action.payload
    })
}
export const initFocusTaskAction: CaseReducer<tasksState> = (state) => {
    return ({
        ...state, edit: {}, taskEdit: null, taskFocus: null,
    })
}
//action without Action at the end => Action that handle side effect (API Call)
export const addPodcastFetch: CaseReducer<tasksState, PayloadAction<taskTypeApiResult[] | undefined>> = (state, action) => {
    let tasksDict = {} as tasksDictType
    const result = action.payload!
    result.forEach(value => {
        const id = value.id
        delete value.id
        tasksDict[id] = value as taskType
    })
    return ({
        ...state, status: SUCCEEDED, tasksDict: tasksDict
    })
}
export const addPodcast: CaseReducer<tasksState, PayloadAction<taskTypeApiResult | undefined>> = (state, action) => {

    const value = action.payload!
    const id = value.id
    delete value.id
    state.tasksDict[id] = value as taskType

}

export const apiCallFailed: CaseReducer<tasksState> = state =>
    ({
        ...state, status: FAILED
    })
export const apiCallLoading: CaseReducer<tasksState> = state =>
    ({
        ...state, status: LOADING
    })
