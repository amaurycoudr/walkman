import {DIFFICULTY_ID_DIFFICULT, DIFFICULTY_ID_EASY, DIFFICULTY_ID_MEDIUM} from "../tasksConst";
import {difficulty} from "../tasksType";
import {DIFFICULT_ICON, EASY_ICON, MEDIUM_ICON} from "../../../visualElement/components/icon/IconName";

const difficulties: difficulty[] = [
    {
        id: DIFFICULTY_ID_EASY,
        label: "task:easy",
        point: 10,
        icon: EASY_ICON,
    },
    {
        id: DIFFICULTY_ID_MEDIUM,
        label: "task:medium",
        point: 20,
        icon: MEDIUM_ICON,
    },
    {
        id: DIFFICULTY_ID_DIFFICULT,
        label: "task:difficult",
        point: 30,
        icon: DIFFICULT_ICON,
    }
]
export default difficulties