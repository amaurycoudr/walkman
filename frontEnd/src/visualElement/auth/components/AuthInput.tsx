import React, {FC, RefObject, useRef, useState} from "react";
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from "react-native";
import {
    Borders,
    Dimension,
    Colors,
    Positions,
    Typography, AuthDimension,
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
        const [showErrorMessage, setShowErrorMessage] = useState(false)
        const config: inputConfigType =

            field === MEAN_PHONE ? {
                    keyboard: "phone-pad",
                    placeholder: " 6 00 00 00 00",
                    errorMessage: t('authScreen:errorMessagePhone')
                }
                : field === MEAN_MAIL ? {
                    keyboard: "email-address",
                    placeholder: "example@mail.com",
                    errorMessage: t('authScreen:errorMessageMail')
                }

                : {
                    keyboard: "default",
                    placeholder: "Pseudo",
                    errorMessage: t('authScreen:errorMessagePseudo')
                }
        const textColor = fieldValue.length > 0 ? Colors.grey_dark_text : Colors.grey_light_text
        const textSize = fieldValue.length < 18 ? 25 : 25 * 18 / fieldValue.length

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
                    <View
                        style={styles.viewInsideContainer}
                    >

                        <Spacer.Column nbSpace={AuthDimension.AUTH_LEFT_INPUT_INDICATOR_ERROR_MESSAGE}/>
                        {fieldValue.length > 0 ?
                            <InputVerticalIndicator
                                color={!fieldIsValid ? Colors.red : Colors.green_2}
                            />
                            :
                            <InputVerticalIndicator
                                color={Colors.grey_dark}
                            />
                        }
                        <Spacer.Column nbSpace={AuthDimension.AUTH_SPACER_INDICATOR}/>
                        {
                            field === MEAN_PHONE &&
                            <Text
                                style={
                                    {...styles.text, ...Colors.grey_dark_text, fontSize: textSize}
                                }
                            >
                                (+ 33)
                            </Text>

                        }
                        <TextInput
                            returnKeyType={'done'}
                            ref={input}
                            value={fieldValue}
                            onEndEditing={() => {
                                if (fieldValue.length > 0) {
                                    setShowErrorMessage(!fieldIsValid)
                                }
                            }}
                            onChangeText={(value) => {
                                setShowErrorMessage(false)
                                fieldChange(value)
                            }}
                            keyboardType={config.keyboard}
                            placeholder={config.placeholder}
                            style={{flexGrow:1,...styles.text, ...textColor, fontSize: textSize}}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        {fieldValue.length > 0 && showErrorMessage && (
                            <View style={styles.error}>
                                <ErrorMessage errorMessage={config.errorMessage}/>
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
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
        ...Borders.border_shadow,
        ...Colors.white_background,
    },
    viewInsideContainer: {
        overflow: "hidden",
        ...Positions.flex_row,
        ...Positions.items_center,
        height: Dimension.INPUT_HEIGHT,

    },
    text: {
        ...Typography.input_text,

    },
    error: {
        ...AuthDimension.auth_error_message_position,
        ...Positions.position_absolute
    }
});

export default AuthInput;
