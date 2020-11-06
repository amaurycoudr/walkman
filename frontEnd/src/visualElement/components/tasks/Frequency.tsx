import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'

import EditableSlider from "./EditableSlider";

interface Props {
    initialValue: number,
    editFrequency: Function,
    isEditable: boolean,
}

const Frequency: FC<Props> = ({ initialValue, editFrequency, isEditable }) => {

    const [value, setValue] = useState<number>(initialValue);

    return (
        <View>
            <Text>Fréquence : {value}</Text>
            {
                isEditable ?
                    <EditableSlider
                        isEditable={true}
                        value={value}
                        setValue={setValue}
                        field="frequency"
                        isEdited={editFrequency}
                        min={1}
                        max={31}
                    />
                    :
                    null
            }

        </View>
    )
}

export default Frequency
