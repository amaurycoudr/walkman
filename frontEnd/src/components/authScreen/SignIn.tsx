import React, {useContext} from 'react'
import {TouchableOpacity,View,StyleSheet,Text} from "react-native";

import SwitchPhoneMail from "./SwitchPhoneMail"

import {AuthContext} from "../../contexts/AuthContext";




export default function SignIn() {

    const {setPasswordSent} = useContext(AuthContext);

    return (
        <View>
            <SwitchPhoneMail />
            <TouchableOpacity 
            onPress={() => setPasswordSent(true)}
            style={styles.touchable}>
                <Text style={{color : "white"}}>Se connecter</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    touchable : {
        backgroundColor : "blue",
    },
    input : {
        borderWidth : 1,
        borderColor : "black",
        marginBottom : 3
    }
});