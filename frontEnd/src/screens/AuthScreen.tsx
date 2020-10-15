import React, {useState} from "react";
import {View,StyleSheet,StatusBar} from "react-native";

// components
import SignUp from "../components/authScreen/SignUp"
import SignIn from "../components/authScreen/SignIn"
import SwitchInUp from "../components/authScreen/SwitchInUp"

//context
import {AuthProvider} from "../contexts/AuthContext";




const AuthScreen = () => {

    const [registered,setRegistered] = useState(false)


    return(
        <AuthProvider>
            <View style={styles.root}>
                <StatusBar /> 
                {!registered ? <SignUp /> : <SignIn />}
                <SwitchInUp registered={registered} setRegistered={setRegistered}  />
            </View>
        </AuthProvider>
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