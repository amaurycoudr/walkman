import React, {useContext,FC} from 'react'
import { View, Text } from 'react-native'

import {AuthContext} from "../../contexts/AuthContext";

import PseudoInput from "./PseudoInput"
import Switcher from "./Switcher"
import PhoneInput from "./PhoneInput"
import EmailInput from "./EmailInput"
import AuthNavigation from "./AuthNavigation"
import AuthButton from "./AuthButton"


const SignUpContainer:FC = () => {

    const {pseudo,pseudoChange,pseudoIsValid,mean,changeMean,identificationChange,identification,identificationIsValid,signUp,authNavigation,loading} = useContext(AuthContext)

    return (
        <View>
            <PseudoInput 
            pseudoChange={pseudoChange}
            pseudo={pseudo}
            pseudoIsValid={pseudoIsValid}
            />

            <Switcher 
            mean={mean}
            changeMean={changeMean}
            />

            {mean==="phone" ? <PhoneInput identificationChange={identificationChange} identification={identification} identificationIsValid={identificationIsValid} /> : <EmailInput identificationChange={identificationChange} identification={identification} identificationIsValid={identificationIsValid} />}

            <AuthButton text="S'inscrire" changer={signUp} args={[pseudo,mean,identification]} loading={loading} />

            <AuthNavigation message="Déjà un compte ? " linkName="Recevoir mon code" changeConteneur={authNavigation} conteneur="GetCodeContainer" />
            <AuthNavigation message="Déjà reçu un code ? " linkName="Se connecter" changeConteneur={authNavigation} conteneur="SignInContainer" />

        </View>
    )
}

export default SignUpContainer;
