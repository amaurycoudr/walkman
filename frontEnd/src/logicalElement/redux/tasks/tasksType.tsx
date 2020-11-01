import {TASKS_FILTER_CATEGORY, TASKS_FILTER_STATE,} from "./tasksConst";

export type taskType = {
    description?: string,
    title: string,
    begin: string,
    category: number,
    difficulty: number,
    done: string,
    duration: number,
    frequency: number,
    id: number,
    lastBegin: string | null,
    repeat: number,
    thumbnail: string | null,
}

export type difficulty = {
    label: string,
    point: number
}

export type categories = {
    title: string,
    color: string,
    icon: string,
}

export type statesTask = {
    label: string,
}


export type filterType= typeof TASKS_FILTER_CATEGORY | typeof TASKS_FILTER_STATE

export type tasksState = {
    statesTask: statesTask[]
    tasksList: taskType[],
    difficulties: difficulty[],
    categories: categories[],
    status: string,
    filter: filterType,
}

