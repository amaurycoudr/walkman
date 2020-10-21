import React, {useContext,FC} from 'react'
import { View } from 'react-native'


import CodeInput from "./CodeInput"

import {AuthContext} from "../../contexts/AuthContext";

import ErrorMessage from "./ErrorMessage";
import AuthButton from "./AuthButton";
import Switcher from "./Switcher";
import PhoneInput from "./PhoneInput";
import EmailInput from "./EmailInput";

const  SignInContainer:FC = () => {

    const {code,codeChange,passwordAttempt,signIn,identification,mean,authNavigation,changeMean,identificationChange, identificationIsValid,loading} = useContext(AuthContext);

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
