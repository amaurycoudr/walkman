import React, { FC } from 'react'
import { View } from 'react-native'

import IconAction from "./IconAction";

interface Props {
    initEdit: Function,
    disabled: boolean,
}

const EditIcon: FC<Props> = ({ initEdit,disabled }) => {
    return (
        <View>
            <IconAction
                iconName="edit"
                size={20}
                color="#A1A1A1"
                handlePress={initEdit}
                disabled={disabled}
            />
        </View>
    )
}

export default EditIcon
