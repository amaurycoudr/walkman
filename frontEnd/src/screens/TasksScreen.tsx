import React, { useEffect } from "react";
import { View, Text, Button, ScrollView, FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
    tasksEditableSelector,
    tasksFilterSelector,

    tasksStatusSelector, tasksTasksSelector, tasksCategoriesSelector, tasksDifficultiesSelector

} from "../features/tasks/redux/tasksSlice";
import { selectToken } from "../features/token/redux/tokenSlice";

import {
    createTask,
    fetchCategories,
    fetchDifficulties,
    fetchTasks,

} from "../features/tasks/redux/tasksAsyncThunk";
import { INITIAL } from "../helpers/api";
import { changeFilter, initEditTask } from "../features/tasks/redux/tasksSlice";

import { TASKS_FILTER_CATEGORY, TASKS_FILTER_STATE } from "../features/tasks/tasksConst";





// Container
import TaskThumbnail from "../visualElement/tasks/container/TaskThumbnail";
import useEditTask from "../features/tasks/hooks/useTask";


const TasksScreen = () => {

    const dispatch = useDispatch()

    const tasksStatus = useSelector(tasksStatusSelector)
    const taskValues = useSelector(tasksTasksSelector)

    const tasksFilter = useSelector(tasksFilterSelector)
    const token = useSelector(selectToken)!
    const editable = useSelector(tasksEditableSelector)



    const { state: { elements, errorTitle, initialTask }, addElement, saveTaskEdition, initTaskState, editTaskSelected, createNewTask } = useEditTask()
    console.log("new elements")
    console.log(elements)
    useEffect(() => {
        if (editable) {
            editTaskSelected(taskValues[editable])
        }
        else {
            console.log("useEffect initTaskState")
            initTaskState()
        }
    }, [editable])
    useEffect(() => {
        if (tasksStatus == INITIAL) {
            dispatch(fetchTasks(token))
            dispatch(fetchDifficulties())
            dispatch(fetchCategories())
        }
    }, [tasksStatus, dispatch])


    const categories = useSelector(tasksCategoriesSelector);
    const difficulties = useSelector(tasksDifficultiesSelector);




    return (
        <SafeAreaView>
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
            <Text> {errorTitle && "deja une tache avec ce titre"} </Text>
            <Button
                title="choix 1"
                onPress={() => addElement({ title: "titre 1" + Math.random() })}
            />
            <Button
                title="choix 2"
                onPress={() => addElement({ title: "titre 2" })}
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


            {
                categories.length > 0 && difficulties.length > 0 ?
                    <View>
                        <Text>TASK THUMBNAIL</Text>
                        <View>
                            <FlatList
                                data={Object.values(taskValues)}
                                keyExtractor={(item) => item.title}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TaskThumbnail
                                            task={item}
                                            edits={item.id == editable ? elements : null}
                                            cate={categories.find(el => el.id === item.category)!}
                                            difficulty={difficulties.find(el => el.id === item.difficulty)!}
                                            isEditable={editable === null}
                                            isEditing={editable === item.id}
                                            initEdit={() => dispatch(initEditTask(item.id!))} // pour l'instant redux mais par la suite useTask 
                                            editTask={addElement}
                                            cancelEdit={() => {
                                                dispatch(initEditTask(null))
                                                console.log("cancel")
                                            }}
                                            sendEdit={() => {
                                                saveTaskEdition()
                                                dispatch(initEditTask(null))
                                            }}
                                        />
                                    )
                                }}
                            />
                        </View>

                    </View>

                    :
                    null
            }

        </SafeAreaView>
    );
};

export default TasksScreen;