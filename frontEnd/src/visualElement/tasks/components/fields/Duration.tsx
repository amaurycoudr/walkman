import React, {FC} from 'react'
import { View, Text } from 'react-native'

import IconActionLess from "../IconActionLess";

interface Props {
    value : number,
    setSliderField: Function
}

const Duration:FC<Props> = ({value,setSliderField}) => {
    return (
        <View>
            <IconActionLess
            name="forward"
            size={15}
            color="green"
            />
            <Text onPress={() => setSliderField("duration")}>Durée : {value} minutes</Text>
        </View>
    )
}

export default Duration
