import React, {FC} from "react";
import {Text, SafeAreaView, Button} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {StackNavigatorParam} from "../../App";
import {useSelector} from "react-redux";
import {tasksCategoriesSelector, tasksDifficultiesSelector} from "../features/tasks/redux/tasksSlice";
import IconChooser from "../visualElement/tasks/components/creationTask/IconChooser";
import useTask from "../features/tasks/hooks/useTask";
import {Positions} from "../styles";
import ElementChooserContainer from "../visualElement/tasks/components/creationTask/ElementChooserContainer";
import {useTranslation} from "react-i18next";
import InputChooser from "../visualElement/tasks/components/creationTask/InputChooser";
import TimeChooser from "../visualElement/tasks/components/creationTask/TimeChooser";

type CreationTaskScreenNavigationProps = StackNavigationProp<StackNavigatorParam,
    'TabNavigation'>
type CreationTaskProps = {
    navigation: CreationTaskScreenNavigationProps
}
const CreationTaskScreen: FC<CreationTaskProps> = ({navigation}) => {
    const categories = useSelector(tasksCategoriesSelector);
    const difficulties = useSelector(tasksDifficultiesSelector)
    const {state: {elements}, addElement} = useTask()
    const {t} = useTranslation();

    const DURATION_MINUTES = {1: "minutes", 60: "heures"}

    const styleIconCategory = {...Positions.flex_row, ...Positions.space_between}
    const styleIconDifficulty = {...Positions.flex_row, ...Positions.space_around}

    const selectCategory = (category: number) => addElement({category})
    const selectDifficulty = (difficulty: number) => addElement({difficulty})
    const selectTitle = (title: string) => addElement({title})
    const selectDuration = (duration: number) => addElement({duration})
    return (
        <SafeAreaView>
            <ElementChooserContainer
                title={t('task:creationTitleCategory')}
                step={1}
                indication={t('task:creationIndicationCategory')}
            >
                <IconChooser
                    viewStyle={styleIconCategory}
                    elements={categories}
                    handlePress={selectCategory}
                    iconSelected={elements.category}
                />
            </ElementChooserContainer>
            <ElementChooserContainer
                title={t('task:creationTitleDifficulty')}
                step={1}
                indication={t('task:creationIndicationDifficulty')}
            >
                <IconChooser
                    viewStyle={styleIconDifficulty}
                    elements={difficulties}
                    handlePress={selectDifficulty}
                    iconSelected={elements.difficulty}
                />
            </ElementChooserContainer>
            <ElementChooserContainer
                title={t('task:creationTitleTitle')}
                step={1}
                indication={t('task:creationIndicationTitle')}
            >
                <InputChooser
                    text={elements.title}
                    handleEditing={selectTitle}
                    handleEndEditing={() => {
                        console.log("ttt")
                    }
                    }/>
            </ElementChooserContainer>
            <ElementChooserContainer
                title={t('task:creationTitleDuration')}
                step={1}
                indication={t('task:creationIndicationDuration')}
            >
                <TimeChooser min={0} max={10} multipliers={DURATION_MINUTES} handleChange={selectDuration}/>
            </ElementChooserContainer>

            <Button title={"return to te main screen"} onPress={() => navigation.navigate('TabNavigation')}/>

        </SafeAreaView>
    );
};

export default CreationTaskScreen;