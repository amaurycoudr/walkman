import React, {FC} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {Borders, Buttons, Colors, Positions, Typography} from "../../../styles/Index";


const SwitcherButton: FC<{ text: string, changer: Function, selected: boolean }> = ({text, changer, selected}) => {
    const textColor = selected ? Colors.white_text : Colors.grey_dark_text
    const textStyle = {
        ...Typography.title_text,
        ...textColor
    }
    const viewColor = selected && Colors.green_3_background
    const viewStyle = {
        ...viewColor,
        ...Borders.border_radius_20,
        ...Buttons.width_150,
        ...Positions.center
    }
    return (
        <View style={viewStyle}>
            <TouchableOpacity
                onPress={() => changer()}
            >
                <Text
                    style={textStyle}
                >
                    {text}
                </Text>
            </TouchableOpacity>

        </View>
    )
}


export default SwitcherButton;
