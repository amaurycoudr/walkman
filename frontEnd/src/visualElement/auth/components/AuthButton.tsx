import React, {FC} from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Borders, Colors, Dimension, Positions, Typography} from "../../../styles";


const AuthButton: FC<{ text: string, changer: Function, args: any[], disabled: boolean }> =
    ({
         text,
         changer,
         args,
         disabled
     }) => {
        const backgroundColor = disabled ? Colors.green_1_background : Colors.green_2_background

        return (
            <TouchableOpacity
                onPress={() => changer(...args)}
                style={{...styles.view, ...backgroundColor}}
                disabled={disabled}

            >

                <Text style={styles.text}> {text}</Text>
            </TouchableOpacity>

        )
    }
const styles = StyleSheet.create({
    view: {
        ...Dimension.button_size,
        ...Borders.border_radius_20,
        ...Borders.border_shadow,
        ...Positions.content_items_center
    },
    text: {
        ...Typography.title_text,
        ...Colors.white_text
    }
})

export default AuthButton;
