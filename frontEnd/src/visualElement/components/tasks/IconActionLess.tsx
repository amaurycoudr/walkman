import React, { FC } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


const IconActionLess = ({name,size,color,style,backgroundColor}) => {

    return (
        <View>
            <Icon name={name} size={size} color={color} />
        </View>
    )
};

IconActionLess.defaultProps = {
    backgroundColor: null,
};

export default IconActionLess