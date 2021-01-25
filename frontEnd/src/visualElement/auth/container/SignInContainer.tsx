import React, {useContext, FC} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import CodeInput from "../components/CodeInput"
import {AuthContext} from "../../../features/token/contexts/AuthContext";
import ErrorMessage from "../components/ErrorMessage";
import AuthButton from "../components/AuthButton";
import SwitcherInput from "../components/SwitcherInput";
import {useTranslation} from "react-i18next";
import AuthNavigation from "../components/AuthNavigation";
import {GET_CODE_CONTAINER, SIGN_UP_CONTAINER} from "../../../helpers/consts/AuthConst";
import {AuthDimension, Borders, Colors, Dimension, Positions, Typography} from "../../../styles";
import {Spacer} from "../../components/Spacer";
import {PX_CONVERSION} from "../../../styles/dimension";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const SignInContainer: FC = () => {
    const {t} = useTranslation()
    const {
        code,
        codeChange,
        passwordAttempt,
        signIn,
        identification,
        mean,
        authNavigation,
        changeMean,
        identificationChange,
        identificationIsValid,
        loading
    } = useContext(AuthContext)!;

    return (
        <View style={{...Positions.items_center}}>
            <Spacer.Row nbSpace={AuthDimension.AUTH_SPACER_SIGN_IN_TOP}/>
            <SwitcherInput
                changeMean={changeMean}
                identification={identification}
                identificationChange={identificationChange}
                identificationIsValid={identificationIsValid}
                mean={mean}
                spacerPx={AuthDimension.AUTH_SPACER_SIGN_IN_TOP}
            />

            <OTPInputView
                style={{width: Dimension.SWITCHER_INPUT_WIDTH, height: AuthDimension.AUTH_CODE_HEIGHT}}
                pinCount={6}
                autoFocusOnLoad={false}
                codeInputFieldStyle={styles.input}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {
                    codeChange(code)
                }}
            />
            {passwordAttempt < 3 ? <ErrorMessage
                errorMessage={"Le code est invalide il vous reste " + passwordAttempt + " tentative(s)"}/> : null}
            <Spacer.Row nbSpace={20 * PX_CONVERSION}/>
            <AuthButton
                text={t('authScreen:btnSignIn')}
                changer={signIn}
                args={[identification, code, mean, passwordAttempt]}
                disabled={code.length < 6 || !identificationIsValid}
            />
            <Spacer.Row nbSpace={20 * PX_CONVERSION}/>
            <View
                style={{
                    ...Positions.flex_row
                }}
            >
                <Spacer.Column nbSpace={10 * PX_CONVERSION}/>
                <Text
                    style={{
                        width: Dimension.CONTAINER_WIDTH - 20,
                        ...Typography.p_text,
                    }}
                >
                    {t('authScreen:singInMessage')}
                </Text>
                <Spacer.Column nbSpace={10 * PX_CONVERSION}/>
            </View>
            <Spacer.Row nbSpace={15 * PX_CONVERSION}/>
            <AuthNavigation
                message={t('authScreen:textAlreadyCount2')}
                linkName={t('authScreen:linkAlreadyCount')}
                changeContainer={authNavigation}
                container={GET_CODE_CONTAINER}
            />
            <Spacer.Row nbSpace={3 * PX_CONVERSION}/>
            <AuthNavigation
                message={t('authScreen:textSignUp')}
                linkName={t('authScreen:linkSignUp')}
                changeContainer={authNavigation}
                container={SIGN_UP_CONTAINER}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        ...Borders.border_radius_15,
        ...Borders.border_shadow,
        ...Colors.white_background,
        ...AuthDimension.auth_code_input_size,
        ...Positions.text_center,
        fontSize: 25,
        ...Colors.grey_dark_text,
        borderColor: Colors.white_custom
    },
    underlineStyleHighLighted: {},
});

export default SignInContainer;
//<CodeInput codeChange={codeChange}/>
