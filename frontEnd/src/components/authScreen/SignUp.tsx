import React, {useState} from "react";
import {View,Text,TouchableOpacity,TextInput,StyleSheet} from "react-native";




const SignUp = () => {
    const [form,setForm] = useState({
        username : "",
        mail : "",
        phone : ""
    });

    return(
        <View >
            <TextInput 
            value={form.username}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Pseudo"
            style={styles.input}
            onChangeText={(name) => {setForm({
                ...form,
                username : name
            })}}
            />

            <TextInput
            value={form.phone}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Numéro de téléphone ou mail" 
            style={styles.input}
            />

            <TouchableOpacity style={styles.touchable}>
                <Text style={{color : "white"}}>S'inscrire</Text>
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
    }
    
});

export default SignUp;