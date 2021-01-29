import React, {FC} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {AuthDimension, Colors, Typography} from "../../../styles";


const ErrorMessage: FC<{ errorMessage: string }> = ({errorMessage}) => {
    return (
        <View>
            <Text style={styles.text}>{errorMessage}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    text: {
        ...Colors.red_text,
        ...Typography.p_text,
        ...AuthDimension.error_message_lineHeight
    }
})

export default ErrorMessage;
