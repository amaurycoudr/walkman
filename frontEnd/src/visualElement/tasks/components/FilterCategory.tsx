import React, {FC} from 'react'
import { View, Text, StyleProp, TextStyle } from 'react-native'

// Components :
import IconActionLess from "./IconActionLess";

interface Props {
    title : string,
    iconName : string,
    style ?: StyleProp<TextStyle> 
};

const FilterCategory:FC<Props> = ({title,iconName,style}) => {
    return (
        <View>
            <Text>{title}</Text>
            
            <IconActionLess
            name={iconName}
            size={20} // hard coded for now
            color="#C1C3C4" // hard coded for now
            />
        </View>
    )
};

export default FilterCategory