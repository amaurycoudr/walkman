import React,{FC} from 'react'
import { View, Text } from 'react-native'

const ErrorMessage:FC<{errorMessage:string}> = ({errorMessage}) => {
    return (
        <View>
            <Text>{errorMessage}</Text>
        </View>
    )
};

export default ErrorMessage;
