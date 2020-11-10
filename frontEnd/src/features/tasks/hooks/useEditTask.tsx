import {Dispatch, Reducer, useReducer} from "react";
import {editTaskType, taskType} from "../tasksType";
import {useDispatch, useSelector} from "react-redux";
import {updateTask} from "../redux/tasksAsyncThunk";
import {tasksTitleSelector} from "../redux/tasksSlice";
import {titleIsValid} from "../taskVerification";

type ActionType =
    | { type: 'addEdit'; payload: editTaskType }
    | { type: 'initEdit'; payload: string[] }
    | { type: 'editTaskSelected'; payload: { editTask: taskType, titles: string[] } }


type StateType = {
    edits: editTaskType,
    errorTitle: boolean,
    initialTask: taskType | null,
    taskTitles: string[],
}

const reducer: Reducer<StateType, ActionType> = (state, action) => {
    switch (action.type) {
        case 'addEdit' :
            return {
                ...state,
                edits: Object.assign({...state.edits}, action.payload),
                errorTitle: action.payload.title?
                    !titleIsValid(action.payload.title, state.taskTitles,state.initialTask!.title)
                    :false
            }
        case "initEdit":
            return init(action.payload)
        case "editTaskSelected":
            return Object.assign(init(action.payload.titles), {initialTask: action.payload.editTask})


    }
}
const init = (taskTitles: string[]) => {
    const state = initialState
    state.taskTitles = taskTitles;
    return state
}
const initialState = {
    initialTask: null,
    edits: {} as editTaskType,
    errorTitle: false,
    taskTitles: [],
} as StateType
export default () => {
    const taskTitles = useSelector(tasksTitleSelector)

    const [state, dispatch] = useReducer(reducer, initialState)
    const reduxDispatch = useDispatch()
    const addEdit = (dispatch: Dispatch<ActionType>) => {
        return ((edit: editTaskType) => {
            dispatch({type: 'addEdit', payload: edit})
        })

    }
    const initEdit = (dispatch: Dispatch<ActionType>) => {
        return (() => dispatch({type: 'initEdit', payload: taskTitles}))
    }
    const saveEdit = (dispatch: Dispatch<ActionType>) => {
        return (() => {
            reduxDispatch(updateTask(state.edits))
            dispatch({type: 'initEdit', payload: taskTitles})
        })
    }
    const editTaskSelected = (dispatch: Dispatch<ActionType>) => {
        return ((task: taskType) => dispatch({type: "editTaskSelected", payload: {editTask: task, titles: taskTitles}}))
    }
    return {
        state,
        saveEdit: saveEdit(dispatch),
        initEdit: initEdit(dispatch),
        addEdit: addEdit(dispatch),
        editTaskSelected: editTaskSelected(dispatch)
    }
}