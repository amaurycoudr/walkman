import React from "react";
import {Text, Button, SafeAreaView} from "react-native";
import {useDispatch} from "react-redux";
import {initTokenState} from "../features/token/redux/tokenSlice";
import {initTaskState} from "../features/tasks/redux/tasksSlice";


const SettingsScreen = () => {
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(initTokenState())
        dispatch(initTaskState())

    }
    return (
        <SafeAreaView>
            <Button title="log log log out out out" onPress={logOut}>

            </Button>
            <Text>Settings Screen </Text>
        </SafeAreaView>
    );
};

export default SettingsScreen;