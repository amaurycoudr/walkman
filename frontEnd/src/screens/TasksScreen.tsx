import React from "react";
import { View, Text, Button } from "react-native";

const TasksScreen = ({navigation}) => {
    return (
        <View>
            <Text>Tasks Screen </Text>
            <Text>Liste des taches</Text>
            <Button 
            title="Go to Task"
            onPress={() => navigation.navigate("TaskNavigation",{screen:"Task"})}
            />
            <Button 
            title="Go to TaskCreation"
            onPress={() => navigation.navigate("TaskNavigation",{screen:"CreationTask"})}
            />
        </View>
    );
};

export default TasksScreen;