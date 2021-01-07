import React, {FC} from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {Borders, Colors, Dimension, Positions, Typography} from "../../../styles";


const AuthButton: FC<{ text: string, changer: Function, args: any[], disabled: boolean }> = ({text, changer, args, disabled}) => {
    const backgroundColor = disabled ? Colors.green_1_background : Colors.green_2_background
    console.log(disabled)
    return (
        <TouchableOpacity
            onPress={() => changer(...args)}
            style={
                {

                    ...Dimension.button_size,
                    ...backgroundColor,
                    ...Borders.border_radius_20,
                    ...Borders.border_shadow,
                    ...Positions.content_items_center
                }
            }
            disabled={disabled}

        >

            <Text style={{...Typography.title_text, ...Colors.white_text}}> {text}</Text>
        </TouchableOpacity>

    )
}


export default AuthButton;
