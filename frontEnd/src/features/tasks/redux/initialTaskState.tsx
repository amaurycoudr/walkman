import {tasksState} from "../tasksType";
import {INITIAL} from "../../../helpers/api";
import {TASKS_FILTER_STATE} from "../tasksConst";
import categories from "../const/categories";
import difficulties from "../const/difficulties";

export const initialTaskState: tasksState = {
    tasksDict: {},
    status: INITIAL,
    filter: TASKS_FILTER_STATE,
    categories: categories,
    difficulties: difficulties,
    statesTask: [],
    taskFocus: null,
    taskEdit: null,
}