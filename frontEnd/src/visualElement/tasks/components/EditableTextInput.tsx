import React, { FC, useState } from 'react'
import { View, Text, TextInput, StyleProp, ViewStyle, TextStyle, StyleSheet } from 'react-native'

interface Props {
    field: "title" | "description",
    value: string,
    isEdited: Function,
    isEditable: boolean,
    styleText?: StyleProp<TextStyle>,
    styleInput?: StyleProp<TextStyle | ViewStyle>
};



const EditableTextInput: FC<Props> = ({ field, value, isEdited, isEditable, styleText, styleInput }) => {



    const handleChangeText = (newValue: string) => {
        isEdited({ [field]: newValue });
    };

    return (
        <View>
            {
                !isEditable ?
                    <Text
                        style={[styleText]}
                    >
                        {value}
                    </Text>
                    :
                    <TextInput
                        value={value}
                        onChangeText={newValue => handleChangeText(newValue)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styleInput}
                        autoFocus={true}
                    />
            }
        </View>
    )
};


export default EditableTextInput;
