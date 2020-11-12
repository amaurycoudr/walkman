import React, { FC } from 'react'
import { View, StyleProp, ViewStyle, TextStyle } from 'react-native'

import Slider from '@react-native-community/slider';

interface Props {
    isEditable: boolean,
    value: number,
    setValue?: Function,
    field: string,
    isEdited: Function,
    min: number,
    max: number,
    step?: number,
    style?: StyleProp<ViewStyle | TextStyle>
}

const EditableSlider: FC<Props> = ({ isEditable, value, setValue, field, isEdited, min, max, step, style }) => {



    return (
        <View>
            <Slider
                disabled={!isEditable}
                value={value}
                onValueChange={val=>isEdited({ [field] : val})}
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
