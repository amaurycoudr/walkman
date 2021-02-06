export const SPORT_ICON = "sport"
export const CREATIVITY_ICON = "creativity"
export const STUDY_ICON = "study"
export const WELL_BEING_ICON = "wellBeing"
export const EASY_ICON = "easy"
export const MEDIUM_ICON = "medium"
export const DIFFICULT_ICON = "difficult"
export const EDIT_ICON = "edit"
export const DONE_ICON = "done"
export const DURATION_ICON = "duration"
export const CANCEL_ICON = "cancel"


export type IconNameType = typeof SPORT_ICON
    | typeof CREATIVITY_ICON
    | typeof STUDY_ICON
    | typeof WELL_BEING_ICON
    | typeof EASY_ICON
    | typeof MEDIUM_ICON
    | typeof DIFFICULT_ICON
    | typeof EDIT_ICON
    | typeof DONE_ICON
    | typeof DURATION_ICON
    | typeof CANCEL_ICON

export interface IconComponentType {
    width: number,
    height: number,
    color: string
}