import React, { FC, useState } from 'react'
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native'

import Slider from '@react-native-community/slider';

interface Props {
    isEditable : boolean,
    initialValue: number,
    field: string,
    isEdited: Function,
    min: number,
    max: number,
    step?: number,
    style?: StyleProp<ViewStyle|TextStyle>
}

const EditableSlider: FC<Props> = ({ isEditable, initialValue, field, isEdited, min, max, step, style }) => {

    const [value, setValue] = useState<number>(initialValue);


    return (
        <View>
            <Text>{value}</Text>
            <Slider
                disabled={!isEditable}
                value={value}
                onValueChange={val => setValue(val)}
                onSlidingComplete={newValue => isEdited({[field] : newValue})}
                minimumValue={min}
                maximumValue={max}
                step={step}
            />
        </View>
    )
};

EditableSlider.defaultProps = {
    step: 1
}

export default EditableSlider;
