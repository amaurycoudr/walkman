import React, {FC} from 'react'
import { View } from 'react-native'

import {editTask} from "../../../logicalElement/redux/tasks/tasksSlice";

// Components
import EditableTextInput from "../../components/tasks/EditableTextInput";
import Title from "../../components/tasks/Title"

// Type 
import {taskType} from "../../../logicalElement/redux/tasks/tasksType"



const TaskThumbnail:FC<{task:taskType}> = ({task}) => {
    return (
        <View>
            <Title 
            value={task.title}
            editTitle={editTask}
            />
        </View>
    )
};

export default TaskThumbnail;
