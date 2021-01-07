import React, {FC} from 'react'
import {View, TextInput} from 'react-native'

import ErorMessage from "./ErrorMessage";

import globalStyles from "../styles/global";

const EmailInput: FC<{ identificationChange: Function, identificationIsValid: boolean, identification: string }> = ({identificationChange, identificationIsValid, identification}) => {
    console.log(identification)
    console.log(identificationIsValid)
    return (
        <View>
            <TextInput
                value={identification}
                onChangeText={value => identificationChange(value)}
                placeholder="Adresse mail"
                style={{...globalStyles.input, ...globalStyles.margin5}}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            {identification.length === 0 ? null : identificationIsValid ? null :
                <ErorMessage errorMessage="Veuillez renseigner un mail correct"/>}
        </View>
    )
}

export default EmailInput;