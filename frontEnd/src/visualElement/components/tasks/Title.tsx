import React, {FC} from 'react'
import { View, Text, StyleProp, TextStyle, ViewStyle } from 'react-native'

import EditableTextInput from './EditableTextInput';

interface Props {
    value : string,
    editTitle : Function,
    style?: StyleProp<ViewStyle|TextStyle>
}

const Title:FC<Props> = ({value,editTitle,style}) => {
    return (
        <View>
            <EditableTextInput
            field="title"
            initialValue={value}
            isEdited={editTitle}
            />
        </View>
    )
}

export default Title
