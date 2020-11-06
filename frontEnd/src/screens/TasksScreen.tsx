import React, {useEffect} from "react";
import {View, Text, Button, ScrollView, FlatList} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {
    tasksEditableSelector,
    tasksFilterSelector,

    tasksStatusSelector, tasksTasksSelector,
    tasksTitleSelector
} from "../logicalElement/redux/tasks/tasksSlice";
import {selectToken} from "../logicalElement/redux/token/tokenSlice";

import {
    createTask,
    fetchCategories,
    fetchDifficulties,
    fetchTasks,
    updateTask
} from "../logicalElement/redux/tasks/tasksAsyncThunk";
import {INITIAL} from "../helpers/api";
import {changeFilter, initEditTask, editTask} from "../logicalElement/redux/tasks/tasksSlice";

import {TASKS_FILTER_CATEGORY, TASKS_FILTER_STATE} from "../logicalElement/redux/tasks/tasksConst";


// Components
import ProgressBar from "../visualElement/components/tasks/ProgressBar";


// Container
import TaskThumbnail from "../visualElement/container/tasks/TaskThumbnail";


const TasksScreen = () => {

    const dispatch = useDispatch()

    const tasksStatus = useSelector(tasksStatusSelector)
    const taskValues = useSelector(tasksTasksSelector)
    const taskTitles = useSelector(tasksTitleSelector)
    const tasksFilter = useSelector(tasksFilterSelector)
    const token = useSelector(selectToken)!
    const editable = useSelector(tasksEditableSelector)
    console.log(taskValues)

    useEffect(() => {
        if (tasksStatus == INITIAL) {
            dispatch(fetchTasks(token))
            dispatch(fetchDifficulties())
            dispatch(fetchCategories())
            //ICI JE CHOISI LE ID DE LA TACHE QUI VA ETRE EDITE
            dispatch(initEditTask(1))


        }
    }, [tasksStatus, dispatch])

    return (
        <View>
            <Text>Example for the redux actions </Text>

            <Text>{tasksFilter.toUpperCase()}</Text>

            <Button
                title="state filter"
                onPress={() => dispatch(changeFilter(TASKS_FILTER_STATE))}
            />
            <Button
                title="category filter"
                onPress={() => dispatch(changeFilter(TASKS_FILTER_CATEGORY))}
            />
            <Text>EDIT TASK/UPDATE TASK </Text>
            <Button
                title="choix 1"
                onPress={() => dispatch(editTask({title: "titre 1"}))}
            />
            <Button
                title="choix 2"
                onPress={() => dispatch(editTask({title: "titre 2"}))}
            />
            <Button
                title="update task"
                onPress={() => dispatch(updateTask({title: "test" + Math.floor(Math.random() * Math.floor(100))}))}
            />
            <Text>CREATE TASK</Text>
            <Button
                title="create task"
                onPress={() => dispatch(createTask({
                    description: `description plu s ${Math.random() * 100}`,
                    title: `le titre au hasard ${Math.random() * 100}`,
                    category: 1,
                    difficulty: 1,
                    repeat: 100,
                    frequency: 13
                }))}
            />


            <Text>TASK THUMBNAIL</Text>
            <FlatList
                data={Object.values(taskValues)}
                keyExtractor={(item) => item.title}
                renderItem={({item, index}) => {

                    return (
                        <TaskThumbnail
                            task={item}
                            isEditable={editable === item.id}
                            initEdit={() => dispatch(initEditTask(item.id!))}
                        />
                    )
                }}
            />

        </View>
    );
};

export default TasksScreen;