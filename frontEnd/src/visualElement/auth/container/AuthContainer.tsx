import React, {useContext} from "react";
import {View,StyleSheet,StatusBar} from "react-native";

import SignUpContainer from "./SignUpContainer";
import GetCodeContainer from "./GetCodeContainer";
import SignInContainer from "./SignInContainer";
import ErrorMessage from "../components/ErrorMessage";

import {AuthContext} from "../../../features/token/contexts/AuthContext"

const switchRender = (container:"SignUpContainer"|"SignInContainer"|"GetCodeContainer") => {
    
    switch(container){
        case "SignUpContainer":
            return <SignUpContainer />
        case "GetCodeContainer":
            return <GetCodeContainer />
        case "SignInContainer":
            return <SignInContainer />
    }
}



export default function AuthContainer() {

    const {container,errorMessage} = useContext(AuthContext)!;

    return (
        <View style={styles.root}>
                <StatusBar />
                <ErrorMessage errorMessage={errorMessage} />
                {switchRender(container)}
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
