import React, {FC} from "react";
import {Text, View} from "react-native";
import TransitionScrollView from "../../components/TransitionScrollView";
import {Colors, Dimension, Positions, Typography} from "../../../styles";



type Props = {
    mean: string,
    means: string[],
    titles: string[]
}
const Titles: FC<Props> = ({mean, means, titles,}) => {
    const ViewStyle = {
        width: Dimension.SCREEN_WIDTH,
        ...Dimension.title_height
    }

    const TextStyle = {
        width: Dimension.SCREEN_WIDTH,
        ...Dimension.title_lineHeight,
        ...Positions.text_center,
        ...Typography.big_title_text,
        ...Colors.white_text
    }
    return (
        <View style={ViewStyle}>
            <TransitionScrollView speed={600} width={Dimension.SCREEN_WIDTH} items={means} currentItem={mean}>

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