import React, {FC} from 'react'
import { View, TextInput } from 'react-native'

import globalStyles from "../styles/global"

const  CodeInput:FC<{code:string,codeChange:Function}> = ({code,codeChange}) => {
    return (
        <View>
            <TextInput
            placeholder="Entrez le code reçu"
            keyboardType="numeric"
            value={code}
            onChangeText={(value) => codeChange(value)}
            autoCapitalize="none"
            autoCorrect={false}
            style={{...globalStyles.input,...globalStyles.margin5}}
            />
        </View>
    )
}

export default CodeInput;