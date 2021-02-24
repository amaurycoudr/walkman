import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text } from "react-native";

import { useTranslation } from "react-i18next";

// Const
import {TIME_MINUTES} from "../../../features/tasks/tasksConst";

// Components
import EditableTextInput from "../components/EditableTextInput";
import Frequency from "../components/fields/Frequency";
import ProgressBar from "../components/fields/ProgressBar";
import Duration from "../components/fields/Duration";
import EditableSlider from "../components/EditableSlider";
import { Spacer } from "../../components/Spacer";
import Icon from "../../components/icon/Icon";
import IconAction from "../components/IconAction";
import {MEDIUM_ICON} from "../../components/icon/IconName";
import TimeChooser from "../components/creationTask/TimeChooser";

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
  TaskThumbDim,
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

  const [fieldEdited, setFieldEdited] = useState<
    "title" | "duration" | "frequency" | "category" | "difficulty" | null
  >(null);

  useEffect(()=>{
    if(["title","category","difficulty",null].includes(fieldEdited)){
      setSliderField(null)
    }
  },[fieldEdited])

  const { t } = useTranslation();

  return (
    <View style={[styles.container]}>
      <Spacer.Row nbSpace={TaskThumbDim.ROW_SPACE_BIG} />
      <View style={[styles.line, { justifyContent: "space-between" }]}>
        <View style={[styles.line]}>
          <EditableTextInput
            field="title"
            value={
              edits
                ? "title" in edits
                  ? edits.title!
                  : task.title
                : task.title
            }
            isEdited={editTask}
            isEditable={isEditing}
            setCurrentField={setFieldEdited}
            styleText={{ ...styles.title_text, color: cate.color }}
            styleInput={{
              ...TaskThumbDim.card_title_text_edit,
              color: cate.color,
            }}
          />

          <Spacer.Column nbSpace={TaskThumbDim.COL_SPACE_SMALL} />

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
            width={TaskThumbDim.ICON_SIZE}
            height={TaskThumbDim.ICON_SIZE}
            name="play"
            color={Colors.grey_dark}
            handlePress={() => {
              return null;
            }}
            disabled={isEditable}
          />

          <Spacer.Column nbSpace={TaskThumbDim.COL_SPACE} />

          <IconAction
            width={TaskThumbDim.ICON_SIZE}
            height={TaskThumbDim.ICON_SIZE}
            name="edit"
            color={cate.color}
            handlePress={initEdit}
            disabled={!isEditable}
          />
        </View>
      </View>

      <Spacer.Row nbSpace={TaskThumbDim.ROW_SPACE} />

      <ProgressBar
        fullWidth={100}
        progressWidth={(task.done! / task.repeat) * 100}
        height={10 * Dimension.PX_CONVERSION}
        colorCompleted={cate.color}
        backgroundColor={Colors.grey_middle}
      />

      <Spacer.Row nbSpace={TaskThumbDim.ROW_SPACE} />

      <View
        style={[
          styles.line,
          { justifyContent: task.duration ? "space-between" : "flex-end" },
        ]}
      >
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
          <Icon
            width={TaskThumbDim.ICON_SIZE}
            height={TaskThumbDim.ICON_SIZE}
            name={difficulty.icon}
            color={isEditing ? cate.color : Colors.grey_dark}
          />
          <Spacer.Column nbSpace={TaskThumbDim.COL_SPACE} />
          <Icon
            width={TaskThumbDim.ICON_SIZE}
            height={TaskThumbDim.ICON_SIZE}
            name={cate.icon}
            color={isEditing ? cate.color : Colors.grey_dark}
          />
        </View>
      </View>

      {sliderField ? (
        <>
        <Spacer.Row nbSpace={TaskThumbDim.ROW_SPACE_BIG}/>
        <TimeChooser
        min={0}
        max={30}
        multipliers={TIME_MINUTES}
        handleChange={editTask}
        />
        <Spacer.Row nbSpace={TaskThumbDim.ROW_SPACE_BIG}/>
        </>
      ) : null}

      {isEditing ? (
        <>
          <View
            style={[
              styles.line,
              { justifyContent: "center", alignItems: "flex-end" },
            ]}
          >
            <View style={styles.col}>
              <IconAction
                width={TaskThumbDim.ICON_WIDTH_BIG}
                height={TaskThumbDim.ICON_SIZE_BIG}
                name="done"
                color={Colors.green_2}
                handlePress={()=>{setSliderField(null);sendEdit;}}
                disabled={isEditable}
              />
              <Text style={TaskThumbDim.legend}>{t("task:legendDone")}</Text>
            </View>

            <Spacer.Column nbSpace={TaskThumbDim.COL_SPACE_BIG} />

            <View style={styles.col}>
              <IconAction
                width={TaskThumbDim.ICON_SIZE_BIG}
                height={TaskThumbDim.ICON_SIZE_BIG}
                name="cancel"
                color={cate.color}
                handlePress={()=>{
                  setSliderField(null)
                  cancelEdit()
                }}
                disabled={isEditable}
              />
              <Text style={TaskThumbDim.legend}>{t("task:legendCancel")}</Text>
            </View>
          </View>
          <Spacer.Row nbSpace={TaskThumbDim.ROW_SPACE_SMALL} />
        </>
      ) : (
        <Spacer.Row nbSpace={TaskThumbDim.ROW_SPACE_BIG} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    marginVertical: 20, // Temp
    paddingHorizontal: TaskThumbDim.CONTAINER_PAD,
    width: Dimension.CARD_WIDTH,
    ...Borders.border_shadow,
    ...Positions.flex_column,
    ...Borders.border_radius_15,
  },
  title_text: {
    ...TaskThumbDim.card_title_text,
  },
  line: {
    ...Positions.flex_row,
    alignItems: "center",
  },
  col: {
    ...Positions.flex_column,
    ...Positions.content_items_center,
  },
});

export default TaskThumbnail;
