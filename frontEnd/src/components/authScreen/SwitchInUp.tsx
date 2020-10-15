import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function SwitchInUp({registered,setRegistered}) {


    if(registered){
        return (
            <View>
                <Text>Pas encore de compte ? <TouchableOpacity onPress={() => setRegistered(!registered)}><Text style={styles.touchable}>s'inscrire</Text></TouchableOpacity></Text>
            </View>
        )
    }
    else{
        return(
            <View>
                <Text>Déjà inscrit ? <TouchableOpacity onPress={() => setRegistered(!registered)}><Text style={styles.touchable}>se connecter</Text></TouchableOpacity></Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    touchable : {
        color : "blue",
        fontSize : 10
    }
});
