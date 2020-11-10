import React, {useContext,FC} from 'react'
import { View, Text } from 'react-native'

import {AuthContext} from "../../features/token/contexts/AuthContext";

import PseudoInput from "../components/authScreen/PseudoInput"
import Switcher from "../components/authScreen/Switcher"
import PhoneInput from "../components/authScreen/PhoneInput"
import EmailInput from "../components/authScreen/EmailInput"
import AuthNavigation from "../components/authScreen/AuthNavigation"
import AuthButton from "../components/authScreen/AuthButton"


const SignUpContainer:FC = () => {

    const {pseudo,pseudoChange,pseudoIsValid,mean,changeMean,identificationChange,identification,identificationIsValid,signUp,authNavigation,loading} = useContext(AuthContext)!

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

            <AuthNavigation message="Déjà un compte ? " linkName="Recevoir mon code" changeContainer={authNavigation} container="GetCodeContainer" />
            <AuthNavigation message="Déjà reçu un code ? " linkName="Se connecter" changeContainer={authNavigation} container="SignInContainer" />

        </View>
    )
}

export default SignUpContainer;
