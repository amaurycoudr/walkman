import React, { FC } from 'react'
import { View, TouchableOpacity } from 'react-native'

import IconActionLess from "./IconActionLess";

interface Props {
    iconName: string,
    size: number,
    color: string,
    handlePress: Function,
    disabled?: boolean,
}

const IconAction: FC<Props> = ({ iconName, size, color, handlePress, disabled }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => handlePress()}
                disabled={disabled}
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
