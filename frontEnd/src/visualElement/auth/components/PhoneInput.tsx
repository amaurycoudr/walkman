import React, {FC} from 'react'
import { View, TextInput } from 'react-native'

import globalStyles from "../styles/global";

import ErrorMessage from "./ErrorMessage";

const PhoneInput:FC<{identificationChange:Function,identificationIsValid:boolean,identification:string}> = ({identificationChange,identificationIsValid,identification}) => {
    return (
        <View>
            <TextInput 
            value={identification}
            onChangeText={value => identificationChange(value)}
            keyboardType="phone-pad"
            placeholder="Numéro de téléphone"
            style={{...globalStyles.input,...globalStyles.margin5}}
            />

            {identification.length===0 ?null: identificationIsValid ? null : <ErrorMessage errorMessage="Veuillez entrer un numéro de téléphone valide." />}
        </View>
    )
}

export default PhoneInput;
