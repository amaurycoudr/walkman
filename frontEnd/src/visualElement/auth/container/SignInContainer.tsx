import React, {useContext,FC} from 'react'
import { View } from 'react-native'


import CodeInput from "../components/CodeInput"

import {AuthContext} from "../../../features/token/contexts/AuthContext";

import ErrorMessage from "../components/ErrorMessage";
import AuthButton from "../components/AuthButton";
import Switcher from "../components/Switcher";
import PhoneInput from "../components/PhoneInput";
import EmailInput from "../components/EmailInput";
import {MEAN_PHONE} from "../../../features/token/AuthConst";

const  SignInContainer:FC = () => {

    const {code,codeChange,passwordAttempt,signIn,identification,mean,authNavigation,changeMean,identificationChange, identificationIsValid,loading} = useContext(AuthContext)!;

    return (
        <View>
            <Switcher mean={mean} changeMean={changeMean}/>
            {mean===MEAN_PHONE ? <PhoneInput identificationChange={identificationChange} identificationIsValid={identificationIsValid} identification={identification}/> : <EmailInput identificationChange={identificationChange} identificationIsValid={identificationIsValid} identification={identification}/> }
            <CodeInput code={code} codeChange={codeChange} />
            {passwordAttempt < 3 ? <ErrorMessage errorMessage={"Le code est invalide il vous reste "+passwordAttempt+" tentative(s)"} /> : null}
            <AuthButton text="Se connecter" changer={signIn} args={[identification,code,mean,passwordAttempt]} loading={loading} /> 
            <AuthButton text="Annuler" changer={authNavigation} args={["SignUpContainer"]} loading={loading} />   
        </View>
    )
}

export default SignInContainer;
