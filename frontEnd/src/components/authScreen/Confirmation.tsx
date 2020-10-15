import React, {useContext} from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'

import globalStyles from "../../styles/global";

import {AuthContext} from "../../contexts/AuthContext";

export default function Confirmation() {

    const {password,setPassword,setPasswordSent,signIn,identification,meanIdentification} = useContext(AuthContext);

    return (
        <View>
            <TextInput 
            placeholder="Entrer le mot de passe de confirmation"
            value={password}
            onChangeText={value => setPassword(value)}
            keyboardType="number-pad"
            style={globalStyles.input}
            />
            <TouchableOpacity
            style={{...globalStyles.button,...styles.touchable}}
            onPress={() => signIn(identification,password,meanIdentification)}
            >
                <Text>Confirmer</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={{...globalStyles.button,...styles.touchable}}
            onPress={() => setPasswordSent(false)}
            >
                <Text>Annuler</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    touchable : {
        marginVertical : 5
    }
})
