import React, {FC} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {Borders, Colors, CreateTaskDimension, Dimension, Positions, Typography} from "../../../../styles";


interface Props {
    handleEditing: (text: string) => void,
    handleEndEditing: () => void,
    text: string | undefined
}

const InputChooser: FC<Props> = ({handleEditing, handleEndEditing, text}) => {
    const textSize = text ? text.length < 25 ? 25 : 25 * 25 / text.length : 25
    return (
        <View
            style={styles.view}
        >
            <TextInput

                placeholderTextColor={Colors.grey_light}
                placeholder={"placeholder"}
                onChangeText={text => handleEditing(text)}
                onSubmitEditing={() => handleEndEditing()}
                onEndEditing={()=>handleEndEditing()}
                style={{...styles.textInput,fontSize:textSize}}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    view: {
        ...Borders.border_shadow,
        ...Borders.border_radius_20,
        ...CreateTaskDimension.picker_size,
        ...Colors.white_background,
        ...Positions.content_items_center

    },
    textInput: {
        ...Typography.input_text,
        ...Colors.grey_dark_text
    }
})
export default InputChooser