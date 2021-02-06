import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Dimensions } from "react-native";

// Components
import EditableTextInput from "../components/EditableTextInput";
import Frequency from "../components/fields/Frequency";
import ProgressBar from "../components/fields/ProgressBar";
import CancelEdit from "../components/fields/CancelEdit";
import SendEdit from "../components/fields/SendEdit";
import Duration from "../components/fields/Duration";
import EditableSlider from "../components/EditableSlider";
import { Spacer } from "../../components/Spacer";
import Icon from "../../components/icon/Icon";
import IconAction from "../components/IconAction";

// Type
import {
  taskType,
  editTaskType,
  category,
  difficulty,
} from "../../../features/tasks/tasksType";

// Style
import {
  Borders,
  Dimension,
  Colors,
  Positions,
  Typography,
  AuthDimension,
} from "../../../styles";

interface Props {
  task: taskType;
  edits: editTaskType | null;
  cate: category;
  difficulty: difficulty;
  isEditable: boolean;
  isEditing: boolean;
  initEdit: Function;
  editTask: Function;
  cancelEdit: Function;
  sendEdit: Function;
}

const TaskThumbnail: FC<Props> = ({
  task,
  edits,
  cate,
  difficulty,
  isEditable,
  isEditing,
  initEdit,
  editTask,
  cancelEdit,
  sendEdit,
}) => {
  const [sliderField, setSliderField] = useState<
    "frequency" | "duration" | null
  >(null);


  return (
    <View style={styles.container}>
      {/* <Spacer.Column nbSpace={15*Dimension.PX_CONVERSION} /> */}

      <View style={[styles.line, { justifyContent: "space-between" }]}>
        <View style={[styles.line]}>
          
          <EditableTextInput 
            field="title"
            value={edits ? "title" in edits ? edits.title! : task.title : task.title}
            isEdited={editTask}
            isEditable={isEditing}
            styleText={{ ...styles.title_text, color: cate.color }}
          />

          <Spacer.Column nbSpace={10} />

          <Frequency
            value={
              edits
                ? "frequency" in edits
                  ? edits.frequency!
                  : task.frequency
                : task.frequency
            }
            setSliderField={setSliderField}
            isEditable={isEditing}
          />
        </View>

        <View style={styles.line}>
          <IconAction
            width={20}
            height={20}
            name="done"
            color={Colors.green_2}
            handlePress={sendEdit}
            disabled={isEditable}
          />

          <Spacer.Column nbSpace={20*Dimension.PX_CONVERSION} />

          <IconAction
            width={20}
            height={20}
            name="edit"
            color={cate.color}
            handlePress={initEdit}
            disabled={!isEditable}
          />
        </View>
      </View>

      <Spacer.Row nbSpace={10 * Dimension.PX_CONVERSION} />

      <ProgressBar
        fullWidth={100}
        progressWidth={(task.done! / task.repeat) * 100}
        height={10*Dimension.PX_CONVERSION}
        colorCompleted={cate.color}
        backgroundColor={Colors.grey_middle}

      />

      <Spacer.Row nbSpace={10 * Dimension.PX_CONVERSION} />

      <View style={[styles.line, { justifyContent: task.duration ? "space-between" : "flex-end" }]}>
        {task.duration ? (
          <Duration
            value={
              edits
                ? "duration" in edits
                  ? edits.duration!
                  : task.duration
                : task.duration
            }
            setSliderField={setSliderField}
            isEditable={isEditing}
          />
        ) : null}

        <View style={styles.line}>
          <Icon width={20} height={20} name={difficulty.icon} color="red" />
          <Spacer.Column nbSpace={20*Dimension.PX_CONVERSION} />
          <Icon width={20} height={20} name={cate.icon} color={cate.color} />
        </View>
      </View>

      {sliderField ? (
        <EditableSlider
          value={task[sliderField]!}
          field={sliderField}
          isEdited={editTask}
          min={1}
          max={30}
        />
      ) : null}

      {isEditing ? (
        <View>
          <CancelEdit
            cancel={() => {
              cancelEdit();
              setSliderField(null);
            }}
          />
          <SendEdit send={sendEdit} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    marginVertical: 20,
    paddingVertical: 25 * Dimension.PX_CONVERSION,
    paddingHorizontal: 15*Dimension.PX_CONVERSION,
    width: Dimension.CARD_WIDTH,
    ...Borders.border_shadow,
    ...Positions.flex_column,
    ...Borders.border_radius_15
  },
  title_text: {
    ...Typography.card_title_text,
  },
  line: {
    ...Positions.flex_row,
    alignItems: "center",
  },
});

export default TaskThumbnail;
