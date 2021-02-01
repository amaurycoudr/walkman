import React, {FC, useState} from 'react'
import {useSelector} from "react-redux"
import {View, StyleSheet} from 'react-native'


// Components
import Title from "../components/fields/Title";
import Frequency from "../components/fields/Frequency";
import ProgressBar from "../components/fields/ProgressBar";
import CancelEdit from "../components/fields/CancelEdit";
import SendEdit from "../components/fields/SendEdit";
import Duration from "../components/fields/Duration";
import EditableSlider from "../components/EditableSlider";
import {Spacer} from "../../components/Spacer";
import Icon from "../../components/icon/Icon";
import IconAction from "../components/IconAction";


// Type
import {taskType, editTaskType, category, difficulty} from "../../../features/tasks/tasksType"

// Style
import {
    Borders,
    Dimension,
    Colors,
    Positions,
    Typography, AuthDimension,
} from "../../../styles";


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


        <View style={styles.container}>

            <Spacer.Column nbSpace={15}/>

            <IconAction
                iconName="edit"
                size={20}
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
                viewStyle={{backgroundColor: "blue", padding:5}}
            />
            <Icon
                width={20}
                height={20}
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
    container: {
        backgroundColor: "white",
        flex: 1,
        marginVertical: 20,
        width: Dimension.SWITCHER_INPUT_WIDTH,
        ...Borders.border_shadow
    }
})

export default TaskThumbnail;
