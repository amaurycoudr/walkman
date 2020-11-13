import React, {FC} from 'react'
import { View, Text } from 'react-native'

import IconAction from "../IconAction";

interface Props {
    send: Function
}

const SendEdit:FC<Props> = ({send}) => {
    return (
        <View>
            <IconAction
            iconName="paper-plane"
            color="blue"
            size={30}
            handlePress={send}
            />
        </View>
    )
}

export default SendEdit
