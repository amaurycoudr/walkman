import React, {FC} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const AuthNavigation:FC<{message:string,linkName:string,container:string,changeContainer:Function}> = ({message,linkName,container,changeContainer}) => {
    return (
        <View>
            <Text>
                {message}
                <TouchableOpacity
                onPress={() => {changeContainer(container)}}
                >
                    <Text style={{color:"blue"}}>{linkName}</Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
}

export default AuthNavigation;