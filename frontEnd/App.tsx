// React & React native
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useSelector} from "react-redux";
import {createNavigator} from "react-navigation";


// Screens
import SettingsScreen from "./src/screens/SettingsScreen";
import TasksScreen from "./src/screens/TasksScreen";
import CreationTaskScreen from "./src/screens/CreationTaskScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import AuthScreen from "./src/screens/AuthScreen";

//Redux

import store, {persist} from "./src/features/store";
import {selectToken} from "./src/features/token/redux/tokenSlice";
import {PersistGate} from "redux-persist/integration/react";
import {
    useFonts,
    Lato_900Black_Italic,
    Lato_700Bold_Italic,
    Lato_700Bold,
    Lato_400Regular_Italic,
    Lato_400Regular,
    Lato_300Light_Italic,
    Lato_300Light,
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_900Black
} from "@expo-google-fonts/lato";
import {AppLoading} from "expo";


// Navigation
const StackTask = createStackNavigator();
const TabMain = createBottomTabNavigator();

const TaskNavigation = () => {
    return (
        <StackTask.Navigator initialRouteName="Tasks">
            <StackTask.Screen name="Tasks" component={TasksScreen}/>
            <StackTask.Screen name="CreationTask" component={CreationTaskScreen}/>
        </StackTask.Navigator>


    )
};

const AppNav = () => {
    const token = useSelector(selectToken)
    return (
        <NavigationContainer>
            {
                token == null ?
                    <StackTask.Navigator
                        screenOptions={{
                            headerShown: false
                        }}>
                        <StackTask.Screen name="Auth" component={AuthScreen}/>
                    </StackTask.Navigator>
                    :
                    <TabMain.Navigator initialRouteName="TaskNavigation">
                        <TabMain.Screen name="Settings" component={SettingsScreen}/>
                        <TabMain.Screen name="TaskNavigation" component={TaskNavigation}/>
                        <TabMain.Screen name="Dashboard" component={DashboardScreen}/>
                    </TabMain.Navigator>
            }
        </NavigationContainer>
    );
};


const App = () => {
    let [fontsLoaded] = useFonts({
        Lato_900Black_Italic,
        Lato_700Bold_Italic,
        Lato_700Bold,
        Lato_400Regular_Italic,
        Lato_400Regular,
        Lato_300Light_Italic,
        Lato_300Light,
        Lato_100Thin,
        Lato_100Thin_Italic,
        Lato_900Black
    });
    if (fontsLoaded) {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persist}>
                    <AppNav/>
                </PersistGate>
            </Provider>
        )
    } else {
        return(<AppLoading/>)
    }
}


export default App;