import React, { FC } from "react";
import { View, StyleSheet } from "react-native";

import CharacterInput from "react-native-character-input";

import {
  Borders,
  Dimension,
  Colors,
  Positions,
  Typography,
} from "../../../styles/Index";

const CodeInput: FC<{ codeChange: Function }> = ({ codeChange }) => {
  return (
    <View style={styles.root}>
      <CharacterInput
        placeHolder="000000"
        showCharBinary="111111"
        handleChange={(value) => codeChange(value)}
        keyboardType="numeric"
        inputContainerStyle={styles.individualInputContainer}
        placeHolderTextColor={Colors.grey_light}
        permenantTextStyle={{ color: Colors.grey_dark }}
        inputType="contained"
        containerStyle={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  individualInputContainer: {
    ...Borders.border_radius_15,
    ...Borders.border_shadow,
    ...Colors.white_background,
    width: 40 * Dimension.PX_WIDTH_CONVERSION,
    height: 60 * Dimension.PX_HEIGHT_CONVERSION,
    ...Positions.flex_row,
  },
  root: {
    width: Dimension.SWITCHER_INPUT_WIDTH,
  },
});
export default CodeInput;
