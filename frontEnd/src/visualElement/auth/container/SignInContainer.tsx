import React, {useContext, FC} from 'react'
import {View} from 'react-native'
import CodeInput from "../components/CodeInput"
import {AuthContext} from "../../../features/token/contexts/AuthContext";
import ErrorMessage from "../components/ErrorMessage";
import AuthButton from "../components/AuthButton";
import SwitcherInput from "../components/SwitcherInput";
import {useTranslation} from "react-i18next";
import AuthNavigation from "../components/AuthNavigation";
import {GET_CODE_CONTAINER, SIGN_UP_CONTAINER} from "../../../helpers/consts/AuthConst";

const SignInContainer: FC = () => {
    const {t}=useTranslation()
    const {code, codeChange, passwordAttempt, signIn, identification, mean, authNavigation, changeMean, identificationChange, identificationIsValid, loading} = useContext(AuthContext)!;

    return (
        <View>
            <SwitcherInput
                changeMean={changeMean}
                identification={identification}
                identificationChange={identificationChange}
                identificationIsValid={identificationIsValid}
                mean={mean}
            />
            <CodeInput code={code} codeChange={codeChange}/>
            {passwordAttempt < 3 ? <ErrorMessage
                errorMessage={"Le code est invalide il vous reste " + passwordAttempt + " tentative(s)"}/> : null}
            <AuthButton text={t('authScreen:btnSignIn')} changer={signIn} args={[identification, code, mean, passwordAttempt]}
                        loading={loading}/>
             <AuthNavigation
                message={t('authScreen:textAlreadyCount2')}
                linkName={t('authScreen:linkAlreadyCount')}
                changeContainer={authNavigation}
                container={GET_CODE_CONTAINER}
            />
             <AuthNavigation
                message={t('authScreen:textSignUp')}
                linkName={t('authScreen:linkSignUp')}
                changeContainer={authNavigation}
                container={SIGN_UP_CONTAINER}
            />
        </View>
    )
}

export default SignInContainer;
