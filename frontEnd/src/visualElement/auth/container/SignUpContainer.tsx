import React, {useContext, FC} from 'react'
import {StyleSheet, View} from 'react-native'

import {AuthContext} from "../../../features/token/contexts/AuthContext";

import PseudoInput from "../components/PseudoInput"
import AuthNavigation from "../components/AuthNavigation"
import AuthButton from "../components/AuthButton"

import SwitcherInput from "../components/SwitcherInput";
import {GET_CODE_CONTAINER, SIGN_IN_CONTAINER} from "../../../helpers/consts/AuthConst";
import {useTranslation} from "react-i18next";


const SignUpContainer: FC = () => {
    const {t} = useTranslation()
    const {pseudo, pseudoChange, pseudoIsValid, mean, changeMean, identificationChange, identification, identificationIsValid, signUp, authNavigation, loading} = useContext(AuthContext)!
    return (
        <View>
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
            <AuthButton
                text={t('authScreen:btnSignUp')}
                changer={signUp}
                args={[pseudo, mean, identification]}
                loading={loading}/>

            <AuthNavigation
                message={t('authScreen:textAlreadyCount')}
                linkName={t('authScreen:linkAlreadyCount')}
                changeContainer={authNavigation}
                container={GET_CODE_CONTAINER}
            />
            <AuthNavigation
                message={t('authScreen:textAlreadyCode')}
                linkName={t('authScreen:linkAlreadyCode')}
                changeContainer={authNavigation}
                container={SIGN_IN_CONTAINER}
            />

        </View>
    )
}


export default SignUpContainer;
