import React, {useContext} from "react";
import {View,StyleSheet,StatusBar} from "react-native";

import SignUpContainer from "./SignUpContainer";
import GetCodeContainer from "./GetCodeContainer";
import SignInContainer from "./SignInContainer";
import ErrorMessage from "./ErrorMessage";

import {AuthContext} from "../../contexts/AuthContext"

const switchRender = (conteneur:"SignUpContainer"|"SignInContainer"|"GetCodeContainer") => {
    
    switch(conteneur){
        case "SignUpContainer":
            return <SignUpContainer />
        case "GetCodeContainer":
            return <GetCodeContainer />
        case "SignInContainer":
            return <SignInContainer />
    }
}



export default function AuthContainer() {

    const {conteneur,errorMessage} = useContext(AuthContext);

    return (
        <View style={styles.root}>
                <StatusBar />
                <ErrorMessage errorMessage={errorMessage} />
                {switchRender(conteneur)}
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
