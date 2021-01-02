import React, {useContext, FC} from 'react'
import {View} from 'react-native'

import AuthNavigation from "../components/AuthNavigation"
import AuthButton from "../components/AuthButton"

import {AuthContext} from "../../../features/token/contexts/AuthContext";
import SwitcherInput from "../components/SwitcherInput";


const getCodeContainer: FC = () => {

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
        <View>
            <SwitcherInput
                changeMean={changeMean}
                identification={identification}
                identificationChange={identificationChange}
                identificationIsValid={identificationIsValid}
                mean={mean}
            />

            <AuthButton text="Recevoir mon code" changer={getCode} args={[mean, identification]} loading={loading}/>
            <AuthNavigation message="Pas encore de compte ? " linkName="S'inscrire" container="SignUpContainer"
                            changeContainer={authNavigation}/>
        </View>
    )

}

export default getCodeContainer;
