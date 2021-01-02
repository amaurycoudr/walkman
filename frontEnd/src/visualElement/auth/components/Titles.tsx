import React, {FC} from "react";
import {Text, View} from "react-native";
import TransitionScrollView from "../../components/TransitionScrollView";
import {SCREEN_WIDTH} from "../../../styles/dimension";
import {Colors, Dimension, Positions, Typography} from "../../../styles/Index";
type Props={
    mean:string,
    means:string[]
}
const Titles:FC<Props> = ({mean, means}) => {
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
    const AUTH_TITLES = ["Inscription", "Obtenir Code", "Connexion"]
    return (
        <View style={ViewStyle}>
            <TransitionScrollView width={SCREEN_WIDTH} items={means} currentItem={mean}>

                {AUTH_TITLES.map((item, index) =>
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