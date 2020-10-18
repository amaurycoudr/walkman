import React, {useContext} from "react";
import {View,StyleSheet,StatusBar} from "react-native";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SwitchInUp from "./SwitchInUp";
import Confirmation from "./Confirmation";

import {AuthContext} from "../../contexts/AuthContext";

export default function AuthContainer() {

    const {passwordSent,hasAccount} = useContext(AuthContext)!;

    return (
        <View style={styles.root}>
                <StatusBar />
                {!passwordSent ? !hasAccount ? <SignUp /> : <SignIn /> : <Confirmation />}
                {!passwordSent ? <SwitchInUp /> : null}
        </View>
    )
};

const styles = StyleSheet.create({
    root : {
        flex : 1,
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center"
    }
});
