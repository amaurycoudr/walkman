import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Positions, Colors, Dimension } from "../../../../styles/index";

import Icon from "../../../components/icon/Icon";

import {Spacer} from "../../../components/Spacer";

interface Props {
  value: number;
  setSliderField: Function;
  isEditable: boolean;
}

const Duration: FC<Props> = ({ value, setSliderField, isEditable }) => {
  return (
    <View style={styles.root}>
      <Icon name="duration" width={20} height={20} color="gray" />
      <Spacer.Column nbSpace={13*Dimension.PX_CONVERSION} />
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
    alignItems: "center"
  },
});

export default Duration;
