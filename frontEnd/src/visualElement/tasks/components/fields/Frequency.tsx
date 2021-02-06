import React, { FC } from 'react'
import { View, Text } from 'react-native'

import {Dimension,TaskThumbDim} from "../../../../styles/index"


import EditableSlider from "../EditableSlider";

import {Colors} from "../../../../styles/index"

interface Props {
    value: number,
    setSliderField: Function,
    isEditable : boolean
}

const Frequency: FC<Props> = ({ value, setSliderField, isEditable }) => {


    return (
        <View style={isEditable ? TaskThumbDim.highlight_field_round : null }>
            <Text
                onPress={() => isEditable ? setSliderField("frequency") : null}
                style={{color: Colors.grey_dark}}
            >
                {value}j
            </Text>
        </View>
    )
}

export default Frequency
