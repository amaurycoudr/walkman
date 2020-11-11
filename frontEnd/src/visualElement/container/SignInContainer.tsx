import React, {useContext,FC} from 'react'
import { View } from 'react-native'


import CodeInput from "../components/authScreen/CodeInput"

import {AuthContext} from "../../features/token/contexts/AuthContext";

import ErrorMessage from "../components/authScreen/ErrorMessage";
import AuthButton from "../components/authScreen/AuthButton";
import Switcher from "../components/authScreen/Switcher";
import PhoneInput from "../components/authScreen/PhoneInput";
import EmailInput from "../components/authScreen/EmailInput";

const  SignInContainer:FC = () => {

    const {code,codeChange,passwordAttempt,signIn,identification,mean,authNavigation,changeMean,identificationChange, identificationIsValid,loading} = useContext(AuthContext)!;

    return (
        <View>
            <Switcher mean={mean} changeMean={changeMean}/>
            {mean==="phone" ? <PhoneInput identificationChange={identificationChange} identificationIsValid={identificationIsValid} identification={identification}/> : <EmailInput identificationChange={identificationChange} identificationIsValid={identificationIsValid} identification={identification}/> }
            <CodeInput code={code} codeChange={codeChange} />
            {passwordAttempt < 3 ? <ErrorMessage errorMessage={"Le code est invalide il vous reste "+passwordAttempt+" tentative(s)"} /> : null}
            <AuthButton text="Se connecter" changer={signIn} args={[identification,code,mean,passwordAttempt]} loading={loading} /> 
            <AuthButton text="Annuler" changer={authNavigation} args={["SignUpContainer"]} loading={loading} />   
        </View>
    )
}

export default SignInContainer;
