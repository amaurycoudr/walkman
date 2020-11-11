import React, { FC, useState } from 'react'
import { View, Text, TextInput, StyleProp, ViewStyle, TextStyle, StyleSheet } from 'react-native'

interface Props {
    field: "title" | "description",
    initialValue: string,
    isEdited: Function,
    isEditable: boolean,
    styleText?: StyleProp<TextStyle>,
    styleInput?: StyleProp<TextStyle | ViewStyle>
};



const EditableTextInput: FC<Props> = ({ field, initialValue, isEdited, isEditable, styleText, styleInput }) => {

    const [value, setValue] = useState<string>(initialValue);
    const [isEditing, setIsEditing] = useState<boolean>(true);

    const handleChangeText = (newValue: string) => {
        setValue(newValue);
        isEdited({ [field]: newValue });
    };

    return (
        <View>
            {
                !isEditing ?
                    <Text
                        onPress={() => isEditable ? setIsEditing(true) : null}
                        style={[styleText]}
                    >
                        {value}
                    </Text>
                    :
                    <TextInput
                        value={value}
                        onChangeText={newValue => handleChangeText(newValue)}
                        onBlur={() => setIsEditing(false)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={[styleInput, styles.input]}
                        autoFocus={true}
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
