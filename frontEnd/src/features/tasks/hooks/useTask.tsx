import {Dispatch, Reducer, useReducer} from "react";
import {editTaskType, taskType} from "../tasksType";
import {useDispatch, useSelector} from "react-redux";
import {createTask, updateTask} from "../redux/tasksAsyncThunk";
import {tasksTitleSelector} from "../redux/tasksSlice";
import {taskIsValid, titleIsValid} from "../taskVerification";

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
        case 'addElement' :
            return {
                ...state,
                elements: Object.assign({...state.elements}, action.payload),
                errorTitle: action.payload.title ?
                    !titleIsValid(action.payload.title, state.taskTitles, state.initialTask!.title)
                    : false
            }
        case "initTaskState":
            return init(action.payload)
        case "selectTaskForEdition":
            return Object.assign(init(action.payload.titles), {initialTask: action.payload.taskForEdit})


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
    const taskTitles = useSelector(tasksTitleSelector)
    const [state, dispatch] = useReducer(reducer, initialState)
    const reduxDispatch = useDispatch()
    const addElement = (dispatch: Dispatch<ActionType>) => {
        return ((edit: editTaskType) => {
            dispatch({type: 'addElement', payload: edit})
        })

    }
    const initTaskState = (dispatch: Dispatch<ActionType>) => {
        return (() => dispatch({type: 'initTaskState', payload: taskTitles}))
    }
    const saveTaskEdition = (dispatch: Dispatch<ActionType>) => {
        return (() => {
            reduxDispatch(updateTask(state.elements))
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
    const selectTaskForEdition = (dispatch: Dispatch<ActionType>) => {
        return ((task: taskType) => dispatch({
            type: "selectTaskForEdition",
            payload: {taskForEdit: task, titles: taskTitles}
        }))
    }
    return ({
        state,
        saveTaskEdition: saveTaskEdition(dispatch),
        initTaskState: initTaskState(dispatch),
        addElement: addElement(dispatch),
        editTaskSelected: selectTaskForEdition(dispatch),
        createNewTask:createNewTask(dispatch)
    })
}
