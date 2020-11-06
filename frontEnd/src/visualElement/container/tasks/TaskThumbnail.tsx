import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

import { editTask, initEditTask } from "../../../logicalElement/redux/tasks/tasksSlice";

// Components
import Title from "../../components/tasks/Title";
import Frequency from "../../components/tasks/Frequency";
import EditIcon from "../../components/tasks/EditIcon";
import ProgressBar from "../../components/tasks/ProgressBar";

// Type 
import { taskType } from "../../../logicalElement/redux/tasks/tasksType"

interface Props {
    task: taskType,
    isEditable: boolean,
    initEdit: Function
}



const TaskThumbnail: FC<Props> = ({ task, isEditable, initEdit }) => {
    return (
        <View style={styles.root}>

            <EditIcon
                initEdit={initEdit}
            />


            <Title
                value={task.title}
                editTitle={editTask}
                isEditable={isEditable}
            />

            <Frequency
                initialValue={task.frequency}
                editFrequency={editTask}
                isEditable={isEditable}
            />

            <ProgressBar
            fullWidth={100}
            progressWidth={task.done/task.repeat*100}
            height={10}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: "white",
        flex: 1,
        marginVertical: 20
    }
})

export default TaskThumbnail;
