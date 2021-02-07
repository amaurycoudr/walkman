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
import {TIME_DAYS, TIME_MINUTES} from "../features/tasks/tasksConst";

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
    const styleIconCategory = {...Positions.flex_row, ...Positions.space_between}
    const styleIconDifficulty = {...Positions.flex_row, ...Positions.space_around}

    console.log(elements)

    const selectCategory = (category: number) => addElement({category})
    const selectDifficulty = (difficulty: number) => addElement({difficulty})
    const selectTitle = (title: string) => addElement({title})
    const selectDuration = (duration: number) => addElement({duration})
    const selectFrequency = (frequency: number) => addElement({frequency})
    return (
        <SafeAreaView>
            <ElementChooserContainer
                title={t('task:creationTitleCategory')}
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

                indication={t('task:creationIndicationDuration')}
            >
                <TimeChooser min={0} max={60} multipliers={TIME_MINUTES} handleChange={selectDuration}/>
            </ElementChooserContainer>
            <ElementChooserContainer
                title={t('task:creationTitleFrequency')}

                indication={t('task:creationIndicationFrequency')}
            >
                <TimeChooser min={0} max={30} multipliers={TIME_DAYS} handleChange={selectFrequency}/>
            </ElementChooserContainer>
            <Button title={"return to te main screen"} onPress={() => navigation.navigate('TabNavigation')}/>

        </SafeAreaView>
    );
};

export default CreationTaskScreen;