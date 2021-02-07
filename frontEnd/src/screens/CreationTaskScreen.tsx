import React, {FC, useState} from "react";
import {Button, StyleSheet, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {StackNavigatorParam} from "../../App";
import {useSelector} from "react-redux";
import {tasksCategoriesSelector, tasksDifficultiesSelector} from "../features/tasks/redux/tasksSlice";
import IconChooser from "../visualElement/tasks/components/creationTask/IconChooser";
import useTask from "../features/tasks/hooks/useTask";
import {Borders, Colors, Dimension, Positions} from "../styles";
import ElementChooserContainer from "../visualElement/tasks/components/creationTask/ElementChooserContainer";
import {useTranslation} from "react-i18next";
import InputChooser from "../visualElement/tasks/components/creationTask/InputChooser";
import TimeChooser from "../visualElement/tasks/components/creationTask/TimeChooser";
import {TIME_DAYS, TIME_MINUTES} from "../features/tasks/tasksConst";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import TransitionScrollView from "../visualElement/components/TransitionScrollView";

type CreationTaskScreenNavigationProps = StackNavigationProp<StackNavigatorParam,
    'TabNavigation'>
type CreationTaskProps = {
    navigation: CreationTaskScreenNavigationProps
}
const CreationTaskScreen: FC<CreationTaskProps> = ({navigation}) => {
    const categories = useSelector(tasksCategoriesSelector);
    const difficulties = useSelector(tasksDifficultiesSelector)
    const {state: {elements}, addElement} = useTask()
    const [index, setIndex] = useState(0)
    const {t} = useTranslation();
    const selectCategory = (category: number) => addElement({category})
    const selectDifficulty = (difficulty: number) => addElement({difficulty})
    const selectTitle = (title: string) => addElement({title})
    const selectDuration = (duration: number) => addElement({duration})
    const selectFrequency = (frequency: number) => addElement({frequency})
    return (
        <KeyboardAwareScrollView
            enableOnAndroid={true}
            contentContainerStyle={{flexGrow: 1}}
        >
            <View
                style={styles.rootView}
            >

                <View
                    style={styles.containerView}
                >
                    <TransitionScrollView currentItem={index} width={Dimension.CONTAINER_WIDTH} speed={500}>

                        <ElementChooserContainer
                            dimension={{width: Dimension.CONTAINER_WIDTH}}
                            title={t('task:creationTitleCategory')}
                            indication={t('task:creationIndicationCategory')}
                        >
                            <IconChooser
                                viewStyle={styles.icons}
                                elements={categories}
                                handlePress={selectCategory}
                                iconSelected={elements.category}
                            />
                        </ElementChooserContainer>
                        <ElementChooserContainer
                            dimension={{width: Dimension.CONTAINER_WIDTH}}
                            title={t('task:creationTitleDifficulty')}
                            indication={t('task:creationIndicationDifficulty')}
                        >
                            <IconChooser
                                viewStyle={styles.icons}
                                elements={difficulties}
                                handlePress={selectDifficulty}
                                iconSelected={elements.difficulty}
                            />
                        </ElementChooserContainer>
                        <ElementChooserContainer
                            dimension={{width: Dimension.CONTAINER_WIDTH}}
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
                            dimension={{width: Dimension.CONTAINER_WIDTH}}
                            title={t('task:creationTitleDuration')}
                            indication={t('task:creationIndicationDuration')}
                        >
                            <TimeChooser min={0} max={60} multipliers={TIME_MINUTES} handleChange={selectDuration}/>
                        </ElementChooserContainer>
                        <ElementChooserContainer
                            dimension={{width: Dimension.CONTAINER_WIDTH}}
                            title={t('task:creationTitleFrequency')}
                            indication={t('task:creationIndicationFrequency')}
                        >
                            <TimeChooser min={0} max={30} multipliers={TIME_DAYS} handleChange={selectFrequency}/>
                        </ElementChooserContainer>
                    </TransitionScrollView>
                    <Button title={"return to te main screen"} onPress={() => navigation.navigate('TabNavigation')}/>
                    <Button title={"+1"} onPress={() => setIndex(prevState => prevState+1)}/>
                    <Button title={"-1"} onPress={() => setIndex(prevState => prevState-1)}/>
                </View>
            </View>

        </KeyboardAwareScrollView>
    );
};
const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        ...Positions.content_items_center
    },
    containerView: {
        ...Colors.white_background,
        ...Borders.border_shadow,
        ...Borders.border_radius_20,
        ...Dimension.container_width
    },
    icons: {
        ...Positions.flex_row, ...Positions.space_around, ...Dimension.container_width
    }
})
export default CreationTaskScreen;