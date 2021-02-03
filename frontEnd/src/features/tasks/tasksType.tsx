import {TASKS_FILTER_CATEGORY, TASKS_FILTER_STATE,} from "./tasksConst";
import {IconNameType} from "../../visualElement/components/icon/IconName";

export interface taskTypeApiResult {
    description?: string,
    title: string,
    begin: string,
    category: number,
    difficulty: number,
    done: number | null,
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
    begin?: string | null,
    duration?: number | null,
    id?: number,
    done?: number | null,
    description?: string | null,
    lastBegin?: string | null,
    thumbnail?: string | null,
}

export interface editTaskType {
    description?: string,
    title?: string,
    begin?: string,
    category?: number,
    difficulty?: number,
    done?: number | null,
    duration?: number,
    frequency?: number,
    lastBegin?: string | null,
    repeat?: number,
    thumbnail?: string | null,
}

//type for the difficulties of a task
export type difficulty = {
    label: string,
    point: number,
    id: number,
    icon: IconNameType,
}
//type for the categories of a task
export type category = {
    title: string,
    color: string,
    id: number,
    icon: IconNameType,
}
//type for the states of a task
export type statesTask = {
    label: string,
}

//type of the dict of task
export type filterType = typeof TASKS_FILTER_CATEGORY | typeof TASKS_FILTER_STATE

export interface tasksDictType {
    [id: string]: taskType,


}

//type for store.tasks
export type tasksState = {
    statesTask: statesTask[]
    tasksDict: tasksDictType,
    difficulties: difficulty[],
    categories: category[],
    filter: filterType,
    status: string,
    taskFocus: null | number,
    taskEdit: null | number,
}

