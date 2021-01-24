import React, {useContext, FC} from 'react'
import {View} from 'react-native'

import AuthNavigation from "../components/AuthNavigation"
import AuthButton from "../components/AuthButton"

import {AuthContext} from "../../../features/token/contexts/AuthContext";
import SwitcherInput from "../components/SwitcherInput";
import {SIGN_IN_CONTAINER, SIGN_UP_CONTAINER} from "../../../helpers/consts/AuthConst";
import {useTranslation} from "react-i18next";
import {AuthDimension, Positions} from "../../../styles";
import {Spacer} from "../../components/Spacer";


const getCodeContainer: FC = () => {
    const {t} = useTranslation()
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


    return (
        <View style={{...Positions.items_center}}>
            <Spacer.Row nbSpace={AuthDimension.AUTH_SPACER_GET_CODE_TOP}/>
            <SwitcherInput
                changeMean={changeMean}
                identification={identification}
                identificationChange={identificationChange}
                identificationIsValid={identificationIsValid}
                mean={mean}
                spacerPx={AuthDimension.AUTH_SPACER_GET_CODE_SWITCHER}
            />
            <AuthButton
                text={t('authScreen:btnGetCode')}
                changer={getCode}
                args={[mean, identification]}
                disabled={!identificationIsValid}
            />
            <Spacer.Row nbSpace={AuthDimension.AUTH_SPACER_GET_CODE_NAVIGATION}/>
            <AuthNavigation
                message={t('authScreen:textSignUp')}
                linkName={t('authScreen:linkSignUp')}
                container={SIGN_UP_CONTAINER}
                changeContainer={authNavigation}/>
            <Spacer.Row nbSpace={AuthDimension.AUTH_SPACER_GET_CODE_BT_NAVIGATION}/>
            <AuthNavigation
                message={t('authScreen:textAlreadyCode')}
                linkName={t('authScreen:linkAlreadyCode')}
                container={SIGN_IN_CONTAINER}
                changeContainer={authNavigation}
            />
        </View>
    )

}

export default getCodeContainer;
