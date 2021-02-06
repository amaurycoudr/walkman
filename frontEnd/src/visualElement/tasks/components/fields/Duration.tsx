import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Positions, Colors, Dimension, TaskThumbDim } from "../../../../styles/index";

import Icon from "../../../components/icon/Icon";

import {Spacer} from "../../../components/Spacer";

interface Props {
  value: number;
  setSliderField: Function;
  isEditable: boolean;
}

const Duration: FC<Props> = ({ value, setSliderField, isEditable }) => {
  return (
    <View style={[styles.root,isEditable ? TaskThumbDim.highlight_field_pills : null]}>
      <Icon name="duration" width={TaskThumbDim.ICON_SIZE} height={TaskThumbDim.ICON_SIZE} color={Colors.grey_dark} />
      <Spacer.Column nbSpace={TaskThumbDim.COL_SPACE_SMALL} />
      <Text 
        onPress={() => (isEditable ? setSliderField("duration") : null)}
        style={{color:Colors.grey_dark}}
      >
        {value} min
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    ...Positions.flex_row,
    alignItems: "center",
    padding: TaskThumbDim.DUR_PADDING
  },
});

export default Duration;
