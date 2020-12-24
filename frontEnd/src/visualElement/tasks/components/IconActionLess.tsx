import React, { FC } from 'react'
import { TextStyle, View, StyleProp, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


interface propsType {
    name: string,
    size: number,
    color: string,
    style ?: StyleProp<ViewStyle | TextStyle>,
};

const IconActionLess: FC<propsType> = ({ name, size, color, style }) => {

    return (
        <View>
            <Icon
                name={name}
                size={size}
                color={color}
                style={style}
            />
        </View>
    )
};



export default IconActionLess