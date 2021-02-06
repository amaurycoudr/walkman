import React, { FC } from 'react'
import { View, Text } from 'react-native'

import {Dimension} from "../../../../styles/index"


import EditableSlider from "../EditableSlider";

import {Colors} from "../../../../styles/index"

interface Props {
    value: number,
    setSliderField: Function,
    isEditable : boolean
}

const Frequency: FC<Props> = ({ value, setSliderField, isEditable }) => {


    return (
        <View>
            <Text
                onPress={() => isEditable ? setSliderField("frequency") : null}
                style={{color:Colors.grey_dark}}
            >
                {value}j
            </Text>
        </View>
    )
}

export default Frequency
