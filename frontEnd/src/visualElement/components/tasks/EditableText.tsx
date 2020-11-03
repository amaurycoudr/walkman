import React, {FC} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const EditableText:FC<{text:string,isEditable:boolean,isEdited:Function,style:any}> = ({text,isEditable,isEdited,style}) => {
    return (
        <View>
            <TouchableOpacity
            {... isEditable ? {onPress: () => isEdited()} : {}}
            >
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default EditableText;
