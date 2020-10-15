import React, {useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'

import {AuthContext} from "../../contexts/AuthContext";

const SwitchPhoneMail = () => {

    const {setMeanIdentification,identification,setIdentification,meanIdentification} = useContext(AuthContext);

    return (
        <View>
            <View style={styles.switch}>
                    <TouchableOpacity
                    onPress={() => setMeanIdentification("phone")}
                    >
                        <Text>Téléphone</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => setMeanIdentification("email")}
                    >
                        <Text>Mail</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                value={identification}
                onChangeText={value => setIdentification(value)}
                textContentType={meanIdentification === "phone" ? "telephoneNumber" : "emailAddress" }
                keyboardType={meanIdentification === "phone" ? "phone-pad" : "email-address"}
                placeholder={meanIdentification === "phone" ? "numéro de téléphone" : "adresse email"}
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    switch : {
        flexDirection : "row",
        justifyContent : "space-between"
    },
    input : {
        borderWidth : 1,
        color : "black",
        marginBottom : 10
    }
})

export default SwitchPhoneMail;
