import React, {useContext,FC} from 'react'
import { View } from 'react-native'

import Switcher from "./Switcher"
import PhoneInput from "./PhoneInput"
import EmailInput from "./EmailInput"
import AuthNavigation from "./AuthNavigation"
import AuthButton from "./AuthButton"

import {AuthContext} from "../../contexts/AuthContext";


const getCodeContainer:FC = () => {

    const {mean,changeMean,identificationChange,identification,identificationIsValid,authNavigation,getCode,loading} = useContext(AuthContext);

    return (
        <View>
            <Switcher mean={mean} changeMean={changeMean} />
            {mean==="phone" ? <PhoneInput identificationChange={identificationChange} identification={identification} identificationIsValid={identificationIsValid} /> : <EmailInput identificationChange={identificationChange} identification={identification} identificationIsValid={identificationIsValid} />}
            <AuthButton text="Recevoir mon code" changer={getCode} args={[mean,identification]} loading={loading} />
            <AuthNavigation message="Pas encore de compte ? " linkName="S'inscrire" conteneur="SignUpContainer" changeConteneur={authNavigation}/>
        </View>
    )
}

export default getCodeContainer;
