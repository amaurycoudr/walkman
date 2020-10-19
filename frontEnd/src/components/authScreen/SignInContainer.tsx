import React, {useContext,FC} from 'react'
import { View } from 'react-native'


import CodeInput from "./CodeInput"

import {AuthContext} from "../../contexts/AuthContext";

import ErrorMessage from "./ErrorMessage";
import AuthButton from "./AuthButton";

const  SignInContainer:FC = () => {

    const {code,codeChange,passwordAttempt,signIn,identification,mean,authNavigation} = useContext(AuthContext);

    return (
        <View>
            <CodeInput code={code} codeChange={codeChange} />
            {passwordAttempt < 3 ? <ErrorMessage errorMessage={"Le code est invalide il vous reste "+passwordAttempt+" tentative(s)"} /> : null}
            <AuthButton text="Se connecter" changer={signIn} args={[identification,code,mean,passwordAttempt]} /> 
            <AuthButton text="Annuler" changer={authNavigation} args={["SignUpContainer"]}  />   
        </View>
    )
}

export default SignInContainer;
