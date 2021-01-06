import React, { FC, useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import {
  Borders,
  Dimension,
  Colors,
  Positions,
  Typography,
} from "../../../styles/Index";

import ErrorMessage from "./ErrorMessage";
import InputVerticalIndicator from "../../components/InputVerticalIndicator";
import { Spacer } from "../../components/Spacer";

interface Props {
  field: string;
  fieldChange: Function;
  fieldIsValid: boolean;
  fieldValue: string;
}

interface inputConfigType {
  keyboardType: "default" | "phone-pad" | "email-address";
  placeholder: string;
  errorMessage: string;
}

const AuthInput: FC<Props> = ({
  field,
  fieldChange,
  fieldIsValid,
  fieldValue,
}) => {
  const [inputConfig, setInputConfig] = useState<inputConfigType>({
    keyboardType: "default",
    placeholder: "",
    errorMessage: "V",
  });

  useEffect(() => {
    switch (field) {
      case "phone":
        setInputConfig({
          keyboardType: "phone-pad",
          placeholder: "Numéro de téléphone",
          errorMessage: "Veuillez entrer un numéro de téléphone valide.",
        });
        break;
      case "mail":
        setInputConfig({
          keyboardType: "email-address",
          placeholder: "Adresse mail",
          errorMessage: "Veuillez renseigner un mail correct",
        });
        break;
      case "pseudo":
        setInputConfig({
          keyboardType: "default",
          placeholder: "Pseudo",
          errorMessage:
            "Le pseudo est déjà utilisé. Veuillez en choisir un autre.",
        });
        break;
    }
  }, [field]);

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <Spacer.Column nbSpace={30*Dimension.PX_WIDTH_CONVERSION} />
        {fieldValue.length > 0 ? (
          <InputVerticalIndicator
            color={inputConfig.errorMessage.length > 0 ? Colors.green_2 : "red"}
          />
        ) : null}
        <Spacer.Column nbSpace={20*Dimension.PX_WIDTH_CONVERSION} />
        <TextInput
          value={fieldValue}
          onChangeText={(value) => fieldChange(value)}
          keyboardType={inputConfig.keyboardType}
          placeholder={inputConfig.placeholder}
          style={fieldValue.length > 0 ? styles.text : styles.placeholder}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      {fieldIsValid ? null : (
        <ErrorMessage errorMessage={inputConfig.errorMessage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    ...Positions.flex_column,
    width: Dimension.SWITCHER_INPUT_WIDTH,
  },
  inputContainer: {
    ...Borders.border_radius_20,
    height: Dimension.SWITCHER_INPUT_HEIGHT,
    ...Positions.flex_row,
    ...Borders.border_shadow,
    ...Colors.white_background,
  },
  text: {
    ...Typography.title_text,
    ...Colors.grey_dark_text,
  },
  placeholder: {
    ...Typography.p_text,
    color: Colors.grey_light,
  },
});

export default AuthInput;
