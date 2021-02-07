import React, {FC, useState} from 'react'
import {StyleSheet, View} from 'react-native'


// Components
import Title from "../components/fields/Title";
import Frequency from "../components/fields/Frequency";
import ProgressBar from "../components/fields/ProgressBar";
import CancelEdit from "../components/fields/CancelEdit";
import SendEdit from "../components/fields/SendEdit";
import Duration from "../components/fields/Duration";
import EditableSlider from "../components/EditableSlider";


// Type
import {category, difficulty, editTaskType, taskType} from "../../../features/tasks/tasksType"


import {Spacer} from "../../components/Spacer";
import Icon from "../../components/Icon";
import IconAction from "../components/IconAction";
import {MEDIUM_ICON} from "../../components/icon/IconName";


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


const TaskThumbnail: FC<Props> = ({task, edits, cate, difficulty, isEditable, isEditing, initEdit, editTask, cancelEdit, sendEdit}) => {

    const [sliderField, setSliderField] = useState<"frequency" | "duration" | null>(null)


    return (


        <View style={styles.root}>

            <Spacer.Column nbSpace={15}/>

            <IconAction
                iconName={MEDIUM_ICON}
                width={20}
                height={20}
                style={{}}
                color="#A1A1A1"
                handlePress={initEdit}
                disabled={!isEditable}
            />

            <Title
                value={edits ? "title" in edits ? edits.title! : task.title : task.title}
                editTitle={editTask}
                isEditable={isEditing}
            />

            <Frequency
                value={edits ? "frequency" in edits ? edits.frequency! : task.frequency : task.frequency}
                setSliderField={setSliderField}
                isEditable={isEditing}
            />

            <ProgressBar
                fullWidth={100}
                progressWidth={task.done! / task.repeat * 100}
                height={10}
            />

            {
                task.duration ?
                    <Duration
                        value={edits ? "duration" in edits ? edits.duration! : task.duration : task.duration}
                        setSliderField={setSliderField}
                        isEditable={isEditing}
                    />
                    :
                    null
            }

            <Icon
                width={100}
                height={100}
                name={cate.icon}
                color={"white"}
                viewStyle={{backgroundColor: "blue", padding:5}}
            />
            <Icon
                width={20}
                height={20}
                color={"white"}
                name={difficulty.icon}
                viewStyle={{backgroundColor: "red"}}
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
                            cancel={() => {
                                cancelEdit()
                                setSliderField(null)
                            }}
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
