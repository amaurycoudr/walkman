import React, {FC} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import globalStyles from "../../styles/global";

const AuthButton:FC<{text:string,changer:Function,args:any[],loading:boolean}> = ({text,changer,args,loading}) => {
    return (
        <View>
            <TouchableOpacity
            onPress={() => changer(...args)}
            style={{...globalStyles.button,...globalStyles.margin5}}
            disabled={loading ? true : false}
            >
                <Text>{loading ? "loading" : text}</Text>
            </TouchableOpacity>
        </View>
    )
}



export default AuthButton;
