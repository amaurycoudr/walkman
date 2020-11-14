import React, { FC, useState } from 'react'
import { useSelector } from "react-redux"
import { View, StyleSheet } from 'react-native'


// Components
import Title from "../components/fields/Title";
import Frequency from "../components/fields/Frequency";
import EditIcon from "../components/fields/EditIcon";
import ProgressBar from "../components/fields/ProgressBar";
import CancelEdit from "../components/fields/CancelEdit";
import SendEdit from "../components/fields/SendEdit";
import Duration from "../components/fields/Duration";
import EditableSlider from "../components/EditableSlider";
import Category from '../components/fields/Category';

// Type 
import { taskType, editTaskType, category, difficulty } from "../../../features/tasks/tasksType"

import Difficulty from '../components/fields/Difficulty';


interface Props {
    task: taskType,
    edits: editTaskType | null,
    cate: category,
    difficulty: difficulty,
    isEditable: boolean,
    isEditing: boolean,
    initEdit: Function,
    editTask: Function,
    cancelEdit: Function,
    sendEdit: Function
}



const TaskThumbnail: FC<Props> = ({ task, edits, cate, difficulty, isEditable, isEditing, initEdit, editTask, cancelEdit, sendEdit }) => {

    const [sliderField, setSliderField] = useState<"frequency" | "duration" | null>(null)

    console.log("thumbnail")
    console.log(edits)



    return (


        <View style={styles.root}>

            <EditIcon
                initEdit={initEdit}
                disabled={!isEditable}
            />


            <Title
                value={edits ? edits.title ? edits.title : task.title : task.title}
                editTitle={editTask}
                isEditable={isEditing}
            />

            <Frequency
                value={edits ? edits.frequency ? edits.frequency : task.frequency : task.frequency}
                setSliderField={setSliderField}
            />

            <ProgressBar
                fullWidth={100}
                progressWidth={task.done! / task.repeat * 100}
                height={10}
            />

            {
                task.duration ?
                    <Duration
                        value={edits ? edits.duration ? edits.duration : task.duration : task.duration}
                        setSliderField={setSliderField}
                    />
                    :
                    null
            }

            <Category
                iconName={cate.icon}
                color={cate.color}
            />

            <Difficulty
                iconName={difficulty.icon}
                color="black"
            />

            {
                sliderField ?
                    <EditableSlider
                        value={task[sliderField]!}
                        field={sliderField}
                        isEdited={editTask}
                        min={1}
                        max={30}
                    />
                    :
                    null
            }

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
