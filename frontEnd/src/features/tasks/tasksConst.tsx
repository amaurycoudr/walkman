import {tasksState} from "./tasksType";
import {INITIAL} from "../../helpers/api";

export const TASKS_FILTER_STATE = 'state';
export const TASKS_FILTER_CATEGORY = 'category';
export const initialTaskState: tasksState = {
    tasksDict: {},
    status: INITIAL,
    filter: TASKS_FILTER_STATE,
    categories: [],
    difficulties: [],
    statesTask: [],
    taskFocus: null,
    taskEdit: null,
}