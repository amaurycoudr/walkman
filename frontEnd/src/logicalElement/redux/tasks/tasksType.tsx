import {TASKS_FILTER_CATEGORY, TASKS_FILTER_STATE,} from "./tasksConst";

export interface taskTypeApiResult {
    description?: string,
    title: string,
    begin: string,
    category: number,
    difficulty: number,
    done? : number|null,
    duration: number,
    frequency: number,
    id: number,
    lastBegin: string | null,
    repeat: number,
    thumbnail: string | null,
}
export interface taskType {
    title: string,
    category: number,
    difficulty: number,
    repeat: number,
    frequency: number,
    begin?: string|null,
    duration?: number|null,
    id?: number,
    done? : number|null,
    description?: string|null,
    lastBegin?: string | null,
    thumbnail?: string | null,
}

export interface editTaskType {
    description?: string,
    title?: string,
    begin?: string,
    category?: number,
    difficulty?: number,
    done? : number|null,
    duration?: number,
    frequency?: number,
    lastBegin?: string | null,
    repeat?: number,
    thumbnail?: string | null,
}

export type difficulty = {
    label: string,
    point: number
}

export type category = {
    title: string,
    color: string,
    icon: string,
    id: number,
}

export type statesTask = {
    label: string,
}


export type filterType = typeof TASKS_FILTER_CATEGORY | typeof TASKS_FILTER_STATE
export interface  tasksDictType{
    [id:string]:taskType,


}
export type tasksState = {
    statesTask: statesTask[]
    tasksDict: tasksDictType,
    difficulties: difficulty[],
    categories: category[],
    filter: filterType,
    status: string,
    taskFocus: null | number,
    taskEdit: null | number,
    edit: editTaskType,
}

