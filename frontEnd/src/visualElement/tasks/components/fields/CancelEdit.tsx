import React, { FC } from 'react'
import { View } from 'react-native'

import IconAction from "../IconAction";

interface Props {
    cancel: Function
}

const CancelEdit: FC<Props> = ({ cancel }) => {
    return (
        <View>
            <IconAction
                iconName="window-close"
                size={30}
                color="red"
                handlePress={cancel}
            />
        </View>
    )
}

export default CancelEdit
