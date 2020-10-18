import React, {useContext} from "react";
import {View,Text,TouchableOpacity,TextInput,StyleSheet} from "react-native";

import SwitchPhoneMail from "./SwitchPhoneMail";

import {AuthContext} from "../../contexts/AuthContext";

import globalStyles from "../../styles/global";




const SignUp = () => {
    const {pseudo,setPseudo,signUp,meanIdentification,identification,pseudoErrorMessage} = useContext(AuthContext)!;

    return(
        <View >
            <TextInput 
            value={pseudo}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Pseudo"
            style={styles.input}
            onChangeText={(name) => setPseudo(name)}
            />

            {pseudoErrorMessage ? <Text>{pseudoErrorMessage}</Text> : null}

            <SwitchPhoneMail />

            <TouchableOpacity 
            onPress={() => {
                signUp(pseudo,meanIdentification,identification)
            }}
            style={globalStyles.button}>
                <Text style={{color : "white",textAlign : "center"}}>S'inscrire</Text>
            </TouchableOpacity>


            
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    input : {
        borderWidth : 1,
        color : "black",
        paddingVertical : 1,
        paddingHorizontal : 3,
        marginBottom : 10,
    },
    button : {
        marginTop : 3,
    },
    touchable : {
        backgroundColor : "blue",
    },
});

export default SignUp;