import React, {useContext, FC} from 'react'
import {Text, View} from 'react-native'

import Switcher from "../components/Switcher"
import PhoneInput from "../components/PhoneInput"
import EmailInput from "../components/EmailInput"
import AuthNavigation from "../components/AuthNavigation"
import AuthButton from "../components/AuthButton"

import {AuthContext} from "../../../features/token/contexts/AuthContext";
import {StyleSheet} from "react-native";
import {Colors} from "../../../styles/Index";
import {MEAN_MAIL} from "../../../features/token/AuthConst";


const getCodeContainer: FC = () => {

    const {mean, changeMean, identificationChange, identification, identificationIsValid, authNavigation, getCode, loading} = useContext(AuthContext)!;


    return (
        <View>
            <Switcher mean={mean} changeMean={changeMean}/>
            {mean === MEAN_MAIL ?
                <PhoneInput
                    identificationChange={identificationChange}
                    identification={identification}
                    identificationIsValid={identificationIsValid}
                />
                :
                <EmailInput
                    identificationChange={identificationChange}
                    identification={identification}
                    identificationIsValid={identificationIsValid}
                />
            }
            <AuthButton text="Recevoir mon code" changer={getCode} args={[mean, identification]} loading={loading}/>
            <AuthNavigation message="Pas encore de compte ? " linkName="S'inscrire" container="SignUpContainer"
                            changeContainer={authNavigation}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {backgroundColor: Colors.green_3, color: Colors.green_0, fontFamily: 'Lato-LightItalic'},
})
export default getCodeContainer;
