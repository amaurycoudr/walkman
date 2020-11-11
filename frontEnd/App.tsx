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
import TaskScreen from "./src/screens/TaskScreen";
import CreationTaskScreen from "./src/screens/CreationTaskScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import AuthScreen from "./src/screens/AuthScreen";

//Redux

import store from "./src/features/store";
import {selectToken} from "./src/features/token/redux/tokenSlice";


// Navigation
const StackTask = createStackNavigator();
const TabMain = createBottomTabNavigator();

const TaskNavigation = () => {
    return (
        <StackTask.Navigator initialRouteName="Tasks">
            <StackTask.Screen name="Tasks" component={TasksScreen}/>
            <StackTask.Screen name="Task" component={TaskScreen}/>
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
    return (
        <Provider store={store}><AppNav/></Provider>
    )
}


export default App;