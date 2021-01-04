import React, {FC} from "react";
import {Text, View} from "react-native";
import TransitionScrollView from "../../components/TransitionScrollView";
import {SCREEN_WIDTH} from "../../../styles/dimension";
import {Colors, Dimension, Positions, Typography} from "../../../styles/Index";
import {useTranslation} from "react-i18next";


type Props = {
    mean: string,
    means: string[],
    titles:string[]
}
const Titles: FC<Props> = ({mean, means,titles,}) => {
    const {t} = useTranslation()
    const ViewStyle = {
        width: SCREEN_WIDTH,
        ...Dimension.title_height
    }

    const TextStyle = {
        width: SCREEN_WIDTH,
        ...Dimension.title_lineHeight,
        ...Positions.text_center,
        ...Typography.big_title_text,
        ...Colors.white_text
    }
    const AUTH_TITLES = [
        t('authScreen:titleGetCode'),t('authScreen:titleSignUp'),  t('authScreen:titleSignIn')]
    return (
        <View style={ViewStyle}>
            <TransitionScrollView speed={600} width={SCREEN_WIDTH} items={means} currentItem={mean}>

                {titles.map((item, index) =>
                    (
                        <Text key={index}
                              style={TextStyle}>
                            {item}
                        </Text>
                    )
                )}

            </TransitionScrollView>

        </View>
    )
}
export default Titles;