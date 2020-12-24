import React, {FC}  from 'react'
import { View, TextInput } from 'react-native'

import globalStyles from "../styles/global";

import ErrorMessage from "./ErrorMessage";

const PseudoInput:FC<{pseudoChange:Function,pseudoIsValid:boolean,pseudo:string}> = ({pseudoChange,pseudoIsValid,pseudo}) => {
    return (
        <View>
            <TextInput
            value={pseudo}
            onChangeText={value => pseudoChange(value)}
            placeholder="Pseudo"
            style={{...globalStyles.input,...globalStyles.margin5}}
            autoCapitalize="none"
            autoCorrect={false} 
            />
            {pseudoIsValid ? null : <ErrorMessage errorMessage="Le pseudo est déjà utilisé. Veuillez en choisir un autre." />}
        </View>
    )
}


export default PseudoInput;