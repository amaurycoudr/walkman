import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'


// Components
import Title from "../../components/tasks/Title";
import Frequency from "../../components/tasks/Frequency";
import EditIcon from "../../components/tasks/EditIcon";
import ProgressBar from "../../components/tasks/ProgressBar";
import CancelEdit from "../../components/tasks/CancelEdit";
import SendEdit from "../../components/tasks/SendEdit";

// Type 
import { taskType } from "../../../logicalElement/redux/tasks/tasksType"

interface Props {
    task: taskType,
    isEditable: boolean,
    isEditing: boolean,
    initEdit: Function,
    editTask: Function,
    cancelEdit: Function,
    sendEdit: Function
}



const TaskThumbnail: FC<Props> = ({ task, isEditable, isEditing, initEdit, editTask, cancelEdit, sendEdit }) => {
    return (
        <View style={styles.root}>

            <EditIcon
                initEdit={initEdit}
                disabled={!isEditable}
            />


            <Title
                value={task.title}
                editTitle={editTask}
                isEditable={isEditing}
            />

            <Frequency
                initialValue={task.frequency}
                editFrequency={editTask}
                isEditable={isEditing}
            />

            <ProgressBar
                fullWidth={100}
                progressWidth={task.done / task.repeat * 100}
                height={10}
            />

            {
                isEditing ?
                    <View>
                        <CancelEdit
                            cancel={cancelEdit}
                        />
                        <SendEdit
                            send={sendEdit}
                        />
                    </View>

                    :
                    null
            }

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
