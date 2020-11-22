import React, {FC} from 'react'
import { View, Text } from 'react-native'

import IconActionLess from "../IconActionLess";

interface Props {
    value : number,
    setSliderField: Function,
    isEditable: boolean
}

const Duration:FC<Props> = ({value,setSliderField, isEditable}) => {
    return (
        <View>
            <IconActionLess
            name="forward"
            size={15}
            color="green"
            />
            <Text onPress={() => isEditable ? setSliderField("duration") : null}>Durée : {value} minutes</Text>
        </View>
    )
}

export default Duration
