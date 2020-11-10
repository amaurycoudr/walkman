import {editTaskType} from "./tasksType";

export const titleIsValid = (newTitle: string | undefined, titleList: string[], OriginalTitle: string | null = null) => {
    if (newTitle && newTitle.length > 0) {
        if (titleList.includes(newTitle)) {
            return !!(OriginalTitle && OriginalTitle == newTitle);
        }
        return true
    }
    return false
}
export const taskIsValid=(newTask:editTaskType)=>Boolean(newTask.title&&newTask.difficulty&&newTask.repeat&&newTask.frequency)
