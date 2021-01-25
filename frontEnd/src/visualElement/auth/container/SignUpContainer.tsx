//logic
import React, {useContext, FC} from 'react'
import {View} from 'react-native'
//hooks
import {AuthContext} from "../../../features/token/contexts/AuthContext";
import {useTranslation} from "react-i18next";
//components
import AuthNavigation from "../components/AuthNavigation"
import AuthButton from "../components/AuthButton"
import AuthInput from "../components/AuthInput"
import {Spacer} from "../../components/Spacer"
import SwitcherInput from "../components/SwitcherInput";
//const & style
import {GET_CODE_CONTAINER, SIGN_IN_CONTAINER} from "../../../helpers/consts/AuthConst";
import {AuthDimension, Positions} from "../../../styles";


const SignUpContainer: FC = () => {
    const {t} = useTranslation()
    const {
        pseudo,
        pseudoChange,
        pseudoIsValid,
        mean,
        changeMean,
        identificationChange,
        identification,
        identificationIsValid,
        signUp,
        authNavigation,
        loading
    } = useContext(AuthContext)!

    return (
        <View style={{...Positions.items_center}}>
            <Spacer.Row nbSpace={AuthDimension.AUTH_SPACER_SIGN_UP_TOP}/>

            <AuthInput
                field="pseudo"
                fieldChange={pseudoChange}
                fieldValue={pseudo}
                fieldIsValid={pseudoIsValid}
            />
            <Spacer.Row nbSpace={AuthDimension.AUTH_SPACER_SIGN_UP_SWITCHER}/>

            <SwitcherInput
                changeMean={changeMean}
                identification={identification}
                identificationChange={identificationChange}
                identificationIsValid={identificationIsValid}
                mean={mean}
                spacerPx={AuthDimension.AUTH_SPACER_SIGN_UP_SWITCHER}
            />

            <AuthButton
                text={t('authScreen:btnSignUp')}
                changer={signUp}
                args={[pseudo, mean, identification]}
                disabled={loading || !identificationIsValid || !pseudoIsValid}
            />

            <Spacer.Row nbSpace={AuthDimension.AUTH_SPACER_SIGN_UP_NAVIGATION}/>

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
