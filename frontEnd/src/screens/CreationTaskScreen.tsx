import React, {FC} from "react";
import {Text, SafeAreaView, Button} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {StackNavigatorParam} from "../../App";

type CreationTaskScreenNavigationProps = StackNavigationProp<StackNavigatorParam,
    'TabNavigation'>
type CreationTaskProps = {
    navigation: CreationTaskScreenNavigationProps
}
const CreationTaskScreen: FC<CreationTaskProps> = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>Creation Task Screen </Text>
            <Button title={"return to te main screen"} onPress={() => navigation.navigate('TabNavigation')}/>
        </SafeAreaView>
    );
};

export default CreationTaskScreen;