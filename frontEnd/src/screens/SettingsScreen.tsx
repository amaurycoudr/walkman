import React from "react";
import {View, Text, Button, SafeAreaView} from "react-native";
import {useDispatch} from "react-redux";
import {logOut} from "../features/token/redux/tokenSlice";

const SettingsScreen = () => {
    const dispatch=useDispatch();
    return (
        <SafeAreaView>
            <Button title="ceci est le bouton enfaite" onPress={()=>dispatch(logOut())}>

            </Button>
            <Text>Settings Screen </Text>
        </SafeAreaView>
    );
};

export default SettingsScreen;