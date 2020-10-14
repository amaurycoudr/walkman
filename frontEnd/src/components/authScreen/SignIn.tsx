import React, {useState} from 'react'
import {TextInput,TouchableOpacity,View,StyleSheet,Text} from "react-native";

export default function SignIn() {
    const [phone,setPhone] = useState("");

    return (
        <View>
            <TextInput 
            value={phone}
            placeholder="Numéro de téléphone ou email"
            style = {styles.input}
            />
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