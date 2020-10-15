import React, {useContext} from 'react'
import {TouchableOpacity,View,StyleSheet,Text} from "react-native";

import SwitchPhoneMail from "./SwitchPhoneMail"




export default function SignIn() {

    return (
        <View>
            <SwitchPhoneMail />
            <TouchableOpacity style={styles.touchable}>
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