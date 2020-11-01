import {CaseReducer, PayloadAction} from "@reduxjs/toolkit";
import {tasksState} from "./tasksType";
import {filterType} from "./tasksType";

export const changeFilterAction: CaseReducer<tasksState, PayloadAction<filterType>> = (state, action) => {
    return ({
        ...state, filter: action.payload
    })
}