import {Dispatch, Reducer, useEffect, useReducer} from "react";
import {editTaskType, filterType, taskType} from "../tasksType";
import {useDispatch, useSelector} from "react-redux";
import {createTask  , fetchTasks, updateTask} from "../redux/tasksAsyncThunk";
import {tasksStatusSelector, tasksTasksSelector, tasksTitleSelector} from "../redux/tasksSlice";
import {taskIsValid, titleIsValid} from "../taskVerification";
import {selectToken} from "../../token/redux/tokenSlice";
import {INITIAL} from "../../../helpers/api";
import {changeFilter, initEditTask} from "../redux/tasksSlice";

type ActionType =
    | { type: 'addElement'; payload: editTaskType }
    | { type: 'initTaskState'; payload: string[] }
    | { type: 'selectTaskForEdition'; payload: { taskForEdit: taskType, titles: string[] } }


type StateType = {
    elements: editTaskType,
    errorTitle: boolean,
    initialTask: taskType | null,
    taskTitles: string[],
}

const reducer: Reducer<StateType, ActionType> = (state, action) => {
    switch (action.type) {
        case 'addElement':
            return {
                ...state,
                elements: Object.assign({...state.elements}, action.payload),
                errorTitle: action.payload.title ?
                    !titleIsValid(action.payload.title, state.taskTitles, state.initialTask ? state.initialTask.title : null)
                    : false
            }
        case "initTaskState":
            return init(action.payload)
        case "selectTaskForEdition":
            return {...init(action.payload.titles), initialTask: action.payload.taskForEdit}

    }
}
const init = (taskTitles: string[]) => {
    const state = initialState
    state.taskTitles = taskTitles;
    return state
}
const initialState = {
    initialTask: null,
    elements: {} as editTaskType,
    errorTitle: false,
    taskTitles: [],
} as StateType
export default () => {
    //redux selector
    const tasksStatus = useSelector(tasksStatusSelector)
    const token = useSelector(selectToken)!
    const taskValues = useSelector(tasksTasksSelector)
    const taskTitles = useSelector(tasksTitleSelector)

    const [state, dispatch] = useReducer(reducer, initialState)
    const reduxDispatch = useDispatch()
    const addElement = (dispatch: Dispatch<ActionType>) => {
        return ((edit: editTaskType) => {
            dispatch({type: 'addElement', payload: edit})
        })

    }
    // action to init the task state => editable=null
    const initTaskState = (dispatch: Dispatch<ActionType>) => {
        return (() => {
            reduxDispatch(initEditTask(null))
            dispatch({type: 'initTaskState', payload: taskTitles})
        })
    }
    const saveTaskEdition = (dispatch: Dispatch<ActionType>) => {
        return (() => {
            reduxDispatch(updateTask(state.elements))
            reduxDispatch(initEditTask(null))
            dispatch({type: 'initTaskState', payload: taskTitles})
        })
    }
    const createNewTask = (dispatch: Dispatch<ActionType>) => {
        return (() => {
            if (taskIsValid(state.elements)) {
                reduxDispatch(createTask(state.elements as taskType))
                dispatch({type: 'initTaskState', payload: taskTitles})
            }
        })
    }
    // action to select a task for the edition
    const selectTaskForEdition = (dispatch: Dispatch<ActionType>) => {
        return ((taskId: number) => {
            reduxDispatch(initEditTask(taskId))
            dispatch({
                type: "selectTaskForEdition",
                payload: {taskForEdit: taskValues[taskId], titles: taskTitles}
            })
        })
    }
    const boundChangeFilter = (filter: filterType) => {
        reduxDispatch(changeFilter(filter))
    }

    useEffect(() => {
        if (tasksStatus == INITIAL) {
            reduxDispatch(fetchTasks(token))
        }
    }, [tasksStatus])
    return ({
        state,
        saveTaskEdition: saveTaskEdition(dispatch),
        initTaskState: initTaskState(dispatch),
        addElement: addElement(dispatch),
        selectTaskForEdition: selectTaskForEdition(dispatch),
        createNewTask: createNewTask(dispatch),
        boundChangeFilter,
    })
}
