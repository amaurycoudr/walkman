import React,{FC} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Colors, Typography} from "../../../styles";

const ErrorMessage:FC<{errorMessage:string}> = ({errorMessage}) => {
    return (
        <View>
            <Text style={styles.text} >{errorMessage}</Text>
        </View>
    )
};
const styles=StyleSheet.create({
    text:{
        ...Colors.red_text,
        ...Typography.p_text,
    }
})

export default ErrorMessage;
