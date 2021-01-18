import React, {FC, RefObject, useRef, useState} from "react";
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from "react-native";

import {
    Borders,
    Dimension,
    Colors,
    Positions,
    Typography,
} from "../../../styles";

import ErrorMessage from "./ErrorMessage";
import InputVerticalIndicator from "../../components/InputVerticalIndicator";
import {Spacer} from "../../components/Spacer";
import {useTranslation} from "react-i18next";
import {MEAN_MAIL, MEAN_PHONE} from "../../../helpers/consts/AuthConst";

interface Props {
    field: string;
    fieldChange: Function;
    fieldIsValid: boolean;
    fieldValue: string;
}

interface inputConfigType {
    keyboard: "default" | "phone-pad" | "email-address";
    placeholder: string;
    errorMessage: string;
}


const AuthInput: FC<Props> = ({
                                  field,
                                  fieldChange,
                                  fieldIsValid,
                                  fieldValue,
                              }) => {
        const {t} = useTranslation()
        console.log(fieldIsValid, field)
        const [showErrorMessage, setShowErrorMessage] = useState(false)
        const config: inputConfigType =

            field === MEAN_PHONE ? {
                    keyboard: "phone-pad",
                    placeholder: " 0 00 00 00 00",
                    errorMessage: t('authScreen:errorMessagePhone')
                }
                : field === MEAN_MAIL ? {
                    keyboard: "email-address",
                    placeholder: "emailexample@mail.com",
                    errorMessage: t('authScreen:errorMessageMail')
                }

                : {
                    keyboard: "default",
                    placeholder: "Pseudo",
                    errorMessage: t('authScreen:errorMessagePseudo')
                }

        const input: RefObject<TextInput> = useRef(null)

        return (
            <View style={styles.root}>
                <TouchableOpacity
                    onPress={() => {
                        if (input.current) {
                            input.current.focus()
                        }
                    }}
                    style={styles.inputContainer}
                >
                    <Spacer.Column nbSpace={30 * Dimension.PX_CONVERSION}/>
                    {fieldValue.length > 0 ? (
                            <InputVerticalIndicator
                                color={fieldValue.length === 0 || showErrorMessage ? "red" : Colors.green_2}
                            />
                        ) :
                        <InputVerticalIndicator
                            color={Colors.grey_dark}
                        />
                    }
                    <Spacer.Column nbSpace={20 * Dimension.PX_CONVERSION}/>
                    {
                        field === MEAN_PHONE &&
                        <Text
                            style={
                                styles.text
                            }
                        >
                            + 33
                        </Text>

                    }
                    <TextInput
                        returnKeyType={'done'}
                        ref={input}
                        value={fieldValue}
                        onEndEditing={() => {
                            setShowErrorMessage(!fieldIsValid)
                        }}
                        onChangeText={(value) => fieldChange(value)}
                        keyboardType={config.keyboard}
                        placeholder={config.placeholder}
                        style={fieldValue.length > 0 ? styles.text : styles.placeholder}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </TouchableOpacity>
                {showErrorMessage && (
                    <ErrorMessage errorMessage={config.errorMessage}/>
                )}
            </View>
        );
    }
;

const styles = StyleSheet.create({
    root: {
        ...Positions.flex_column,
        width: Dimension.SWITCHER_INPUT_WIDTH,
    },
    inputContainer: {
        ...Borders.border_radius_20,
        height: Dimension.INPUT_HEIGHT,
        ...Positions.flex_row,
        ...Borders.border_shadow,
        ...Colors.white_background,
        ...Positions.items_center
    },
    text: {
        ...Typography.title_text,
        ...Colors.grey_dark_text,
    },
    placeholder: {
        ...Typography.title_text,
        color: Colors.grey_dark,
    },
});

export default AuthInput;
