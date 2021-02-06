import React, { FC, useState } from 'react'
import { View, Text, TextInput, StyleProp, ViewStyle, TextStyle, StyleSheet } from 'react-native'

interface Props {
    field: "title" | "description",
    value: string,
    isEdited: Function,
    isEditable: boolean,
    setCurrentField: Function
    styleText?: StyleProp<TextStyle>,
    styleInput?: StyleProp<TextStyle | ViewStyle>
};



const EditableTextInput: FC<Props> = ({ field, value, isEdited, isEditable,setCurrentField, styleText, styleInput }) => {



    const handleChangeText = (newValue: string) => {
        isEdited({ [field]: newValue });
    };

    const handleField = (value:"title"|"description"|null)=>{
        setCurrentField(value)
    }

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
                        autoFocus={false}
                        onFocus={() => handleField(field)}
                        onBlur={() => handleField(null)}
                    />
            }
        </View>
    )
};


export default EditableTextInput;
