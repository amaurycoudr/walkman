import React, {useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


import {AuthContext} from "../../contexts/AuthContext";


export default function SwitchInUp() {

    const {hasAccount,toggleInUp} = useContext(AuthContext);


    if(hasAccount){
        return (
            <View style={styles.root}>
                <Text>Pas encore de compte ? <TouchableOpacity onPress={() => toggleInUp(!hasAccount)}><Text style={styles.touchable}>s'inscrire</Text></TouchableOpacity></Text>
            </View>
        )
    }
    else{
        return(
            <View style={styles.root}>
                <Text>Déjà inscrit ? <TouchableOpacity onPress={() => toggleInUp(!hasAccount)}><Text style={styles.touchable}>se connecter</Text></TouchableOpacity></Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    touchable : {
        color : "blue",
        fontSize : 10
    },
    root : {
        marginTop : 10
    }
});
