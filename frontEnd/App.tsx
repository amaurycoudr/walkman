// React & React native
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


// Screens
import FakeApi from "./src/screens/FakeApi.tsx";
import SettingsScreen from "./src/screens/SettingsScreen.tsx";
import TasksScreen from "./src/screens/TasksScreen.tsx";
import TaskScreen from "./src/screens/TaskScreen.tsx";
import CreationTaskScreen from "./src/screens/CreationTaskScreen.tsx";
import DashboardScreen from "./src/screens/DashboardScreen.tsx";

// Navigation
const StackTask = createStackNavigator();
const TabMain = createBottomTabNavigator();

const TaskNavigation = () => {
  return (
    <StackTask.Navigator initialRouteName= "Tasks" >
      <StackTask.Screen name= "Tasks" component = { TasksScreen } />
      <StackTask.Screen name="Task" component = { TaskScreen } />
      <StackTask.Screen name="CreationTask" component = { CreationTaskScreen } />
    </StackTask.Navigator>

      
  )
};

const App = () => {
  return (
    <NavigationContainer>
      <TabMain.Navigator initialRouteName= "Test" >
        <TabMain.Screen name= "Settings" component = { SettingsScreen } />
        <TabMain.Screen name="TaskNavigation" component = { TaskNavigation } />
        <TabMain.Screen name="Dashboard" component = { DashboardScreen } />
        <TabMain.Screen name="Test" component = { FakeApi } />
      </TabMain.Navigator>
    </NavigationContainer>
  );
};



export default App;