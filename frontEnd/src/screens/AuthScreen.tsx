import React, {useState} from "react";
import {View,Text,TouchableOpacity,StyleSheet,StatusBar} from "react-native";

// components
import SignUp from "../components/authScreen/SignUp"
import SignIn from "../components/authScreen/SignIn"
import SwitchInUp from "../components/authScreen/SwitchInUp"

const AuthScreen = () => {

    const [registered,setRegistered] = useState(false);

    return(
        <View style={styles.root}>
            <StatusBar /> 
            {!registered ? <SignUp /> : <SignIn/>}
            <SwitchInUp registered={registered} setRegistered={setRegistered} />
        </View>
    );

};

const styles = StyleSheet.create({
    root : {
        flex : 1,
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center"
    }
});

export default AuthScreen;