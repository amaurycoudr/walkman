import React, {FC} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import globalStyles from "../../styles/global";

const AuthButton:FC<{text:string,changer:Function,args:any[]}> = ({text,changer,args}) => {
    return (
        <View>
            <TouchableOpacity
            onPress={() => changer(...args)}
            style={{...globalStyles.button,...globalStyles.margin5}}
            >
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}



export default AuthButton;
