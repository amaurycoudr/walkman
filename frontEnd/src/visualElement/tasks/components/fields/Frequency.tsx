import React, { FC } from 'react'
import { View, Text } from 'react-native'

import EditableSlider from "../EditableSlider";

interface Props {
    value: number,
    setSliderField: Function,
    isEditable : boolean
}

const Frequency: FC<Props> = ({ value, setSliderField, isEditable }) => {


    return (
        <View>
            <Text onPress={() => isEditable ? setSliderField("frequency") : null}>Fréquence : {value}</Text>
        </View>
    )
}

export default Frequency
