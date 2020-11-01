import React, {useEffect} from "react";
import {View, Text, Button} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {tasksSelector} from "../logicalElement/redux/tasks/tasksSlice";
import {selectToken} from "../logicalElement/redux/token/tokenSlice";
import {fetchTasks} from "../logicalElement/redux/tasks/tasksAsyncThunk";
import {INITIAL} from "../helpers/api";
import {changeFilter} from "../logicalElement/redux/tasks/tasksSlice";

import {TASKS_FILTER_CATEGORY, TASKS_FILTER_STATE} from "../logicalElement/redux/tasks/tasksConst";


const TasksScreen = ({navigation}) => {

    const dispatch = useDispatch()

    const tasks = useSelector(tasksSelector)
    const token = useSelector(selectToken)!

    useEffect(() => {
        if (tasks.status == INITIAL) {
            dispatch(fetchTasks(token))
    }
  }, [tasks.status, dispatch])


    return (
        <View>
            <Text>Tasks Screen </Text>
            <Text>Liste des taches</Text>
            <Button
                title="Go to Task"
                onPress={() => navigation.navigate("TaskNavigation", {screen: "Task"})}
            />
            <Button
                title="state filter"
                onPress={() => dispatch(changeFilter(TASKS_FILTER_STATE))}
            />
            <Button
                title="category filter"
                onPress={() => dispatch(changeFilter(TASKS_FILTER_CATEGORY))}
            />
            <Button
                title="Go to TaskCreation"
                onPress={() => navigation.navigate("TaskNavigation", {screen: "CreationTask"})}
            />

        </View>
    );
};

export default TasksScreen;