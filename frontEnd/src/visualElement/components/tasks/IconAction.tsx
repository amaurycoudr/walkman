import React, { FC } from 'react'
import { View, TouchableOpacity } from 'react-native'

import IconActionLess from "./IconActionLess";

interface Props {
    iconName: string,
    size: number,
    color: string,
    handlePress: Function,
    args?: Array<any>
}

const IconAction: FC<Props> = ({ iconName, size, color, handlePress }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => handlePress()}
            >

                <IconActionLess
                    name={iconName}
                    size={size}
                    color={color}
                />
            </TouchableOpacity>
        </View>

    )
};

export default IconAction;
