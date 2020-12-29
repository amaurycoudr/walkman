import React, {FC} from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Borders, Dimension, Colors, Positions, Typography} from "../../../styles/Index";


const SwitcherButton: FC<{ text: string, changer: Function, selected: boolean }> = ({text, changer, selected}) => {
    const textColor = selected ? Colors.white_text : Colors.grey_dark_text
    const textStyle = {
        ...Typography.title_text,
        ...textColor
    }
    const viewColor = selected && Colors.green_2_background
    const viewStyle = {
        ...viewColor,
        ...Borders.border_radius_20,
        ...Dimension.switcher_button_size,
        ...Positions.center
    }
    return (

        <TouchableOpacity
            style={viewStyle}
            onPress={() => changer()}
        >
            <Text
                style={textStyle}
            >
                {text}
            </Text>
        </TouchableOpacity>


    )
}

export default SwitcherButton;
