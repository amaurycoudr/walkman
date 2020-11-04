import React, {FC} from 'react'
import { View, Text, StyleProp, TextStyle, ViewStyle } from 'react-native'

import EditableTextInput from './EditableTextInput';

interface Props {
    value : string,
    editTitle : Function,
    isEditable : boolean,
    style?: StyleProp<ViewStyle|TextStyle>
}

const Title:FC<Props> = ({value,editTitle,isEditable,style}) => {
    return (
        <View>
            <EditableTextInput
            field="title"
            initialValue={value}
            isEditable={isEditable}
            isEdited={editTitle}
            />
        </View>
    )
}

export default Title
