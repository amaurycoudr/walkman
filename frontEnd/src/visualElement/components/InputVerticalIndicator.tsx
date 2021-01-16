import React, {FC} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Dimension} from "../../styles";

const InputVerticalIndicator:FC<{color:string}> = ({color}) => {

    const styles = StyleSheet.create({
        root : {
            width : 2*Dimension.PX_CONVERSION,
            height:40*Dimension.PX_CONVERSION,
            backgroundColor : color,
        }
    })

    return (
        <View style={styles.root}>
        </View>
    )
}



export default InputVerticalIndicator