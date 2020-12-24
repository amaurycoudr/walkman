import React, {useContext,FC} from 'react'
import { View } from 'react-native'

import Switcher from "../components/Switcher"
import PhoneInput from "../components/PhoneInput"
import EmailInput from "../components/EmailInput"
import AuthNavigation from "../components/AuthNavigation"
import AuthButton from "../components/AuthButton"

import {AuthContext} from "../../../features/token/contexts/AuthContext";


const getCodeContainer:FC = () => {

    const {mean,changeMean,identificationChange,identification,identificationIsValid,authNavigation,getCode,loading} = useContext(AuthContext)!;

    return (
        <View>
            <Switcher mean={mean} changeMean={changeMean} />
            {mean==="phone" ? <PhoneInput identificationChange={identificationChange} identification={identification} identificationIsValid={identificationIsValid} /> : <EmailInput identificationChange={identificationChange} identification={identification} identificationIsValid={identificationIsValid} />}
            <AuthButton text="Recevoir mon code" changer={getCode} args={[mean,identification]} loading={loading} />
            <AuthNavigation message="Pas encore de compte ? " linkName="S'inscrire" container="SignUpContainer" changeContainer={authNavigation}/>
        </View>
    )
}

export default getCodeContainer;
