import React, {useContext, FC} from 'react'
import {View} from 'react-native'

import AuthNavigation from "../components/AuthNavigation"
import AuthButton from "../components/AuthButton"

import {AuthContext} from "../../../features/token/contexts/AuthContext";
import SwitcherInput from "../components/SwitcherInput";
import {SIGN_UP_CONTAINER} from "../../../helpers/consts/AuthConst";
import {useTranslation} from "react-i18next";


const getCodeContainer: FC = () => {
    const {t}=useTranslation()
    const {
        mean,
        changeMean,
        identificationChange,
        identification,
        identificationIsValid,
        authNavigation,
        getCode,
        loading
    } = useContext(AuthContext)!;

    console.log(mean)
    console.log(identificationIsValid)
    console.log(identification)
    return (
        <View>
            <SwitcherInput
                changeMean={changeMean}
                identification={identification}
                identificationChange={identificationChange}
                identificationIsValid={identificationIsValid}
                mean={mean}
            />

            <AuthButton text={t('authScreen:btnGetCode')} changer={getCode} args={[mean, identification]} disabled={loading}/>
            <AuthNavigation message={t('authScreen:textSignUp')} linkName={t('authScreen:linkSignUp')} container={SIGN_UP_CONTAINER}
                            changeContainer={authNavigation}/>
        </View>
    )

}

export default getCodeContainer;
