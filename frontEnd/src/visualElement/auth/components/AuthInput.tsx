import React, { FC, useState } from 'react'
import { View, TextInput } from 'react-native'

import globalStyles from "../styles/global";

import ErrorMessage from "./ErrorMessage";

const AuthInput: FC<{ field: string, fieldChange: Function, fieldIsValid: boolean, fieldValue: string }> = ({ field, fieldChange, fieldIsValid, fieldValue }) => {

    const [inputConfig, setInputConfig] = useState({
        keyboardType: "",
        placeholder: "",
        errorMessage: "V"
    })
    switch (field) {
        case "phone":
            setInputConfig({
                keyboardType: "phone-pad",
                placeholder: "Numéro de téléphone",
                errorMessage: "Veuillez entrer un numéro de téléphone valide."
            })
            break;
        case "mail":
            setInputConfig({
                keyboardType: "email-address",
                placeholder: "Adresse mail",
                errorMessage: "Veuillez renseigner un mail correct"
            })
            break;
        case "pseudo":
            setInputConfig({
                keyboardType: "default",
                placeholder: "Pseudo",
                errorMessage: "Le pseudo est déjà utilisé. Veuillez en choisir un autre."
            })
            break;


    }

    return (
        <View>
            <TextInput
                value={fieldValue}
                onChangeText={value => fieldChange(value)}
                keyboardType={inputConfig.keyboardType}
                placeholder={inputConfig.placeholder}
                style={{ ...globalStyles.input, ...globalStyles.margin5 }}
            />

            {fieldIsValid ? null : <ErrorMessage errorMessage={inputConfig.errorMessage} />}
        </View>
    )
}

export default AuthInput;