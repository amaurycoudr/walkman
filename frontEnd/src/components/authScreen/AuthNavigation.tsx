import React, {FC} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const AuthNavigation:FC<{message:string,linkName:string,conteneur:string,changeConteneur:Function}> = ({message,linkName,conteneur,changeConteneur}) => {
    return (
        <View>
            <Text>
                {message}
                <TouchableOpacity
                onPress={() => {changeConteneur(conteneur)}}
                >
                    <Text style={{color:"blue"}}>{linkName}</Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
}

export default AuthNavigation;