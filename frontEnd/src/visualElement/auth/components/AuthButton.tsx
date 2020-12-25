import React, {FC} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {Colors, Typography} from "../../../styles/Index";
import globalStyles from "../styles/global";


const AuthButton: FC<{ text: string, changer: Function, args: any[], loading: boolean }> = ({text, changer, args, loading}) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => changer(...args)}
                style={{...globalStyles.button, ...globalStyles.margin5}}
                disabled={loading}
            >
                <Text style={{...Typography.title_text, ...Colors.black_text}}>{loading ? "loading" : text}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default AuthButton;
