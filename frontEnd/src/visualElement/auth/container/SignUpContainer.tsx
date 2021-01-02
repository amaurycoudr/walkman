import React, {useContext, FC} from 'react'
import {StyleSheet, View} from 'react-native'

import {AuthContext} from "../../../features/token/contexts/AuthContext";

import PseudoInput from "../components/PseudoInput"
import AuthNavigation from "../components/AuthNavigation"
import AuthButton from "../components/AuthButton"
import {GET_CODE_CONTAINER, SIGN_IN_CONTAINER} from "../../../features/token/AuthConst";
import SwitcherInput from "../components/SwitcherInput";




const SignUpContainer: FC = () => {

    const {pseudo, pseudoChange, pseudoIsValid, mean, changeMean, identificationChange, identification, identificationIsValid, signUp, authNavigation, loading} = useContext(AuthContext)!
    return (
        <View >
            <PseudoInput
                pseudoChange={pseudoChange}
                pseudo={pseudo}
                pseudoIsValid={pseudoIsValid}
            />

            <SwitcherInput
                changeMean={changeMean}
                identification={identification}
                identificationChange={identificationChange}
                identificationIsValid={identificationIsValid}
                mean={mean}
            />
            <AuthButton text="S'inscrire" changer={signUp} args={[pseudo, mean, identification]} loading={loading}/>

            <AuthNavigation message="Déjà un compte ? " linkName="Recevoir mon code" changeContainer={authNavigation}
                            container={GET_CODE_CONTAINER}/>
            <AuthNavigation message="Déjà reçu un code ? " linkName="Se connecter" changeContainer={authNavigation}
                            container={SIGN_IN_CONTAINER}/>

        </View>
    )
}


export default SignUpContainer;
