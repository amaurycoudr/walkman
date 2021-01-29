import React, {FC, useState} from "react";
import {Text, SafeAreaView, Button} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {StackNavigatorParam} from "../../App";
import {useSelector} from "react-redux";
import {tasksCategoriesSelector, tasksDifficultiesSelector} from "../features/tasks/redux/tasksSlice";
import IconChooser from "../visualElement/tasks/components/taskElementChooser/IconChooser";
import useTask from "../features/tasks/hooks/useTask";
import {Positions} from "../styles";

type CreationTaskScreenNavigationProps = StackNavigationProp<StackNavigatorParam,
    'TabNavigation'>
type CreationTaskProps = {
    navigation: CreationTaskScreenNavigationProps
}
const CreationTaskScreen: FC<CreationTaskProps> = ({navigation}) => {
    const categories = useSelector(tasksCategoriesSelector);
    const difficulties = useSelector(tasksDifficultiesSelector)
    const {state: {elements}, addElement} = useTask()

    const styleIconChooser = {...Positions.flex_row, ...Positions.space_between}

    const selectCategory = (id) => addElement({category: id})
    const selectDifficulty = (id) => addElement({difficulty: id})
    return (
        <SafeAreaView>
            <IconChooser
                viewStyle={styleIconChooser}
                elements={categories}
                handlePress={selectCategory}
                iconSelected={elements.category}
            />
            <IconChooser
                viewStyle={styleIconChooser}
                elements={difficulties}
                handlePress={selectDifficulty}
                iconSelected={elements.difficulty}/>
            <Text>Creation Task Screen </Text>
            <Button title={"return to te main screen"} onPress={() => navigation.navigate('TabNavigation')}/>

        </SafeAreaView>
    );
};

export default CreationTaskScreen;