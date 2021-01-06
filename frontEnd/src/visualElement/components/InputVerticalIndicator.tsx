import React, {FC} from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InputVerticalIndicator:FC<{color:string}> = ({color}) => {

    const styles = StyleSheet.create({
        root : {
            width : 2,
            marginVertical : 10,
            backgroundColor : color,
        }
    })

    return (
        <View style={styles.root}>
        </View>
    )
}



export default InputVerticalIndicator