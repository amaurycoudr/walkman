import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function SwitchInUp({hasAccount,setHasAccount}) {


    if(hasAccount){
        return (
            <View style={styles.root}>
                <Text>Pas encore de compte ? <TouchableOpacity onPress={() => setHasAccount(!hasAccount)}><Text style={styles.touchable}>s'inscrire</Text></TouchableOpacity></Text>
            </View>
        )
    }
    else{
        return(
            <View style={styles.root}>
                <Text>Déjà inscrit ? <TouchableOpacity onPress={() => setHasAccount(!hasAccount)}><Text style={styles.touchable}>se connecter</Text></TouchableOpacity></Text>
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
