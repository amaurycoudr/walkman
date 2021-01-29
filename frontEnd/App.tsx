// React & React native
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useSelector} from "react-redux";


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

//Fonts
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

//Languages
import './src/helpers/localization/initI18next'

//type
export type StackNavigatorParam = {
    TabNavigation: undefined,
    Auth: undefined,
    CreationTask: undefined,

}

// Navigation
const StackNavigator = createStackNavigator<StackNavigatorParam>();
const TabNavigator = createBottomTabNavigator();

const TabNavigation = () => (
    <TabNavigator.Navigator initialRouteName="TaskNavigation">
        <TabNavigator.Screen name="Settings" component={SettingsScreen}/>
        <TabNavigator.Screen
            name="Task"
            component={TasksScreen}
        />
        <TabNavigator.Screen name="Dashboard" component={DashboardScreen}/>
    </TabNavigator.Navigator>
)

const AppNav = () => {
    const token = useSelector(selectToken)
    const isSignedIn = (token == null)
    return (
        <NavigationContainer>
            <StackNavigator.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                {
                    isSignedIn ?
                        <StackNavigator.Screen name="Auth" component={AuthScreen}/>
                        :
                        <>
                            <StackNavigator.Screen name="TabNavigation" component={TabNavigation}/>
                            <StackNavigator.Screen
                                name="CreationTask"
                                component={CreationTaskScreen}
                            />
                        </>
                }
            </StackNavigator.Navigator>
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
        return (<AppLoading/>)
    }
}


export default App;