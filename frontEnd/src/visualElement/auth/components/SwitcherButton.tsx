import React, {FC} from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'

import globalStyles from "../styles/global";

const SwitcherButton:FC<{text:string,changer:Function,selected:boolean}> = ({text,changer,selected}) => {
    return (
        <View>
            <TouchableOpacity
            onPress={() => changer(text)}
            style={selected ? {...globalStyles.button,...styles.selected} : null}
            >
                <Text>{text}</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    selected : {
        backgroundColor : "blue"
    }
})

export default SwitcherButton;
