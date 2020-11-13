import React, { FC } from 'react'
import { View, Text } from 'react-native'

import EditableSlider from "../EditableSlider";

interface Props {
    value: number,
    setSliderField: Function
}

const Frequency: FC<Props> = ({ value, setSliderField }) => {


    return (
        <View>
            <Text onPress={() => setSliderField("frequency")}>Fréquence : {value}</Text>
        </View>
    )
}

export default Frequency
