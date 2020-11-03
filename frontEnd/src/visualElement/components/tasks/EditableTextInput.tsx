import React, { FC, useState } from 'react'
import { View, Text, TextInput, StyleProp, ViewStyle, TextStyle, StyleSheet } from 'react-native'

interface Props {
    field : "title" | "description",
    initialValue: string,
    isEdited: Function,
    styleText?: StyleProp<TextStyle>,
    styleInput?: StyleProp<TextStyle | ViewStyle>
};



const EditableTextInput: FC<Props> = ({ field, initialValue, isEdited, styleText, styleInput }) => {

    const [value, setValue] = useState<string>(initialValue);
    const [isEditable, setIsEditable] = useState<boolean>(true);

    const handleChangeText = (newValue: string) => {
        setValue(newValue);
        isEdited({[field] : newValue});
    };

    return (
        <View>
            {
                isEditable ?
                    <Text
                        onPress={() => setIsEditable(false)}
                        style={[styleText]}
                    >
                        {value}
                    </Text>
                    :
                    <TextInput
                        value={value}
                        onChangeText={newValue => handleChangeText(newValue)}
                        onBlur={() => setIsEditable(true)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={[styleInput, styles.input]}
                    />
            }
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        borderColor: "black",
        borderWidth: 1
    }
})

export default EditableTextInput;
