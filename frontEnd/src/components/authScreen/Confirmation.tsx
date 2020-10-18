import React, {useContext} from 'react'
import {StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native'

import globalStyles from "../../styles/global";

import {AuthContext} from "../../contexts/AuthContext";

export default function Confirmation() {

    const {password, setPassword, signIn, identification, meanIdentification, passwordAttempt, reset} = useContext(AuthContext)!;

    return (
        <View>
            <TextInput
                placeholder="Entrer le mot de passe de confirmation"
                value={password}
                onChangeText={value => setPassword(value)}
                keyboardType="number-pad"
                style={globalStyles.input}
            />

            {passwordAttempt < 3 ?
                <Text>Mot de passe incorrect il vous reste {passwordAttempt} tentative(s)</Text> : null}

            <TouchableOpacity
                style={{...globalStyles.button, ...styles.touchable}}
                onPress={() => signIn(identification, password, meanIdentification, passwordAttempt)}
            >
                <Text>Confirmer</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{...globalStyles.button, ...styles.touchable}}
                onPress={() => reset()}
            >
                <Text>Annuler</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    touchable: {
        marginVertical: 5
    }
})
