import React, {FC} from "react";
import {Text, View, Button, FlatList, SafeAreaView} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {
    tasksEditableSelector,
    tasksFilterSelector,

    tasksStatusSelector, tasksTasksSelector, tasksCategoriesSelector, tasksDifficultiesSelector

} from "../features/tasks/redux/tasksSlice";

import {TASKS_FILTER_CATEGORY, TASKS_FILTER_STATE} from "../features/tasks/tasksConst";


// Container
import TaskThumbnail from "../visualElement/tasks/container/TaskThumbnail";
import useEditTask from "../features/tasks/hooks/useTask";
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";
import {StackNavigatorParam} from "../../App";

type TasksScreenNavigationProps = StackNavigationProp<StackNavigatorParam,
    'TabNavigation'>
type TasksScreenProps = {
    navigation: TasksScreenNavigationProps
}
const TasksScreen: FC<TasksScreenProps> = ({navigation}) => {

    const dispatch = useDispatch()

    const taskValues = useSelector(tasksTasksSelector)

    const tasksFilter = useSelector(tasksFilterSelector)
    const editable = useSelector(tasksEditableSelector)

    const categories = useSelector(tasksCategoriesSelector);
    const difficulties = useSelector(tasksDifficultiesSelector)


    const {
        state: {
            elements,
            errorTitle,
        },
        addElement,
        saveTaskEdition,
        createNewTask,
        selectTaskForEdition,
        initTaskState,
        boundChangeFilter
    } = useEditTask()

    console.log(elements)
    return (
        <SafeAreaView>
            {/* <Text>Example for the redux actions </Text>

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
                onPress={() => boundChangeFilter(TASKS_FILTER_STATE)}
            />
            <Button
                title="category filter"
                onPress={() => boundChangeFilter(TASKS_FILTER_CATEGORY)}
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
            */}
            <Button title={"create task screen"} onPress={() => navigation.navigate('CreationTask')}/>
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
                categories && categories.length > 0 && difficulties.length > 0 && Object.values(taskValues).length > 0 ?
                    <View>

                        <Text>TASK THUMBNAIL</Text>
                        <View>
                            <FlatList
                                data={Object.values(taskValues)}
                                keyExtractor={(item) => item.title}
                                renderItem={({item, index}) => {
                                    return (
                                        <TaskThumbnail
                                            task={item}
                                            edits={item.id == editable ? elements : null}
                                            cate={categories.find(el => el.id === item.category)!}
                                            difficulty={difficulties.find(el => el.id === item.difficulty)!}
                                            isEditable={editable === null}
                                            isEditing={editable === item.id}
                                            initEdit={() => selectTaskForEdition(item.id!)}
                                            editTask={addElement}
                                            cancelEdit={() => {
                                                selectTaskForEdition(null!)
                                            }}
                                            sendEdit={() => {
                                                saveTaskEdition()
                                                selectTaskForEdition(null!)
                                            }}
                                        />
                                    )
                                }}
                            />
                        </View>

                    </View>

                    :
                    Object.values(taskValues).length == 0 ? <Text>Vous n'avez pas de tâches</Text> : null
            }

        </SafeAreaView>
    );
};

export default TasksScreen;