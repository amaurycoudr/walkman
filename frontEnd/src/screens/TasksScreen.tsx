import React, {useEffect} from "react";
import {View, Text, Button, FlatList, SafeAreaView} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {
    tasksEditableSelector,
    tasksFilterSelector,

    tasksStatusSelector, tasksTasksSelector,

} from "../features/tasks/redux/tasksSlice";
import {selectToken} from "../features/token/redux/tokenSlice";

import {
    createTask,
    fetchCategories,
    fetchDifficulties,
    fetchTasks,

} from "../features/tasks/redux/tasksAsyncThunk";
import {INITIAL} from "../helpers/api";
import {changeFilter, } from "../features/tasks/redux/tasksSlice";

import {TASKS_FILTER_CATEGORY, TASKS_FILTER_STATE} from "../features/tasks/tasksConst";


// Container
import TaskThumbnail from "../visualElement/container/tasks/TaskThumbnail";
import useEditTask from "../features/tasks/hooks/useTask";


const TasksScreen = () => {

    const dispatch = useDispatch()

    const taskValues = useSelector(tasksTasksSelector)

    const tasksFilter = useSelector(tasksFilterSelector)
    const editable = useSelector(tasksEditableSelector)

    const {
        state: {
            elements,
            errorTitle,
        },
        addElement,
        saveTaskEdition,
        createNewTask,
        selectTaskForEdition,
        initTaskState
    } = useEditTask()

    return (
        <SafeAreaView>
            <Text>Example for the redux actions </Text>

            <Text>{tasksFilter.toUpperCase()}</Text>

            <Button
                title="test purpose"
                onPress={() => selectTaskForEdition(3)}
            />
            <Button
                title="test purpose"
                onPress={() => selectTaskForEdition(4)}
            />
            <Button
                title="test purpose"
                onPress={() => initTaskState()}
            />

            <Button
                title="state filter"
                onPress={() => dispatch(changeFilter(TASKS_FILTER_STATE))}
            />
            <Button
                title="category filter"
                onPress={() => dispatch(changeFilter(TASKS_FILTER_CATEGORY))}
            />
            <Text>EDIT TASK/UPDATE TASK </Text>
            <Text> {errorTitle && "deja une tache avec ce titre"} </Text>
            <Button
                title="choix 1"
                onPress={() => addElement({title: "titre 1" + Math.random()})}
            />
            <Button
                title="choix 2"
                onPress={() => addElement({title: "titre 2"})}
            />
            <Button
                title="update task"
                onPress={() => saveTaskEdition()}
            />
            <Text>CREATE TASK</Text>
            <Button
                title="Add element of the new task"
                onPress={() => addElement({
                    description: `description plu s ${Math.random() * 100}`,
                    title: `le titre au hasard ${Math.random() * 100}`,
                    category: 1,
                    difficulty: 1,
                    repeat: 100,
                    frequency: 13
                })}
            />
            <Button
                title="create the task"
                onPress={() => createNewTask()}
            />


            <Text>TASK THUMBNAIL</Text>
            <FlatList
                data={Object.values(taskValues)}
                keyExtractor={(item) => item.title}
                renderItem={({item, index}) => {

                    return (
                        <TaskThumbnail
                            task={item}
                            isEditing={editable === item.id}
                            isEditable={editable == null}
                            initEdit={() => selectTaskForEdition(item.id!)}
                        />
                    )
                }}
            />

        </SafeAreaView>
    );
};

export default TasksScreen;