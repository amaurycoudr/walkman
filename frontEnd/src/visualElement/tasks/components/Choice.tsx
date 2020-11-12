import React, { FC } from 'react'
import { View, FlatList, StyleProp, ViewStyle, TextStyle } from 'react-native'

import IconAction from "./IconAction";

interface itemListChoices {
    iconName: string,
    size: number,
    color: string,
    action: Function,
    style?: StyleProp<ViewStyle | TextStyle>,
}

interface Props {
    listChoices: itemListChoices[]
};

const Choice: FC<Props> = ({ listChoices }) => {

    return (
        <View>
            <FlatList
                data={listChoices}
                renderItem={value => <IconAction iconName={value.item.iconName} size={value.item.size} color={value.item.color} handlePress={value.item.action} />}
                keyExtractor={item => item.iconName}
                numColumns={3}
            />
        </View>
    )
}

export default Choice
