import {CATEGORY_ID_CREATIVITY, CATEGORY_ID_SPORT, CATEGORY_ID_STUDY, CATEGORY_ID_WELL_BEING} from "../tasksConst";
import {
    CREATIVITY_ICON,
    SPORT_ICON,
    STUDY_ICON,
    WELL_BEING_ICON
} from "../../../visualElement/components/icon/IconName";
import {category} from "../tasksType";

const categories: category[] = [
    {
        id: CATEGORY_ID_STUDY,
        title: "task:study",
        color: "#006992",
        icon: STUDY_ICON
    },
    {
        id: CATEGORY_ID_SPORT,
        title: "task:sport",
        color: "#C92A2A",
        icon: SPORT_ICON
    },
    {
        id: CATEGORY_ID_CREATIVITY,
        title: "task:creativity",
        color: "#E3B505",
        icon: CREATIVITY_ICON
    },
    {
        id: CATEGORY_ID_WELL_BEING,
        title: "task:wellBeing",
        color: "#C98986",
        icon: WELL_BEING_ICON
    },
]

export default categories