import React, {FC} from 'react'
import { View } from 'react-native'

import IconActionLess from "../IconActionLess";

interface Props {
    color : string,
    iconName : string
}

const Difficulty:FC<Props> = ({color,iconName}) => {
    return (
        <View>
            <IconActionLess
            name={iconName}
            size={30}
            color={color}
            />
        </View>
    )
}

export default Difficulty
