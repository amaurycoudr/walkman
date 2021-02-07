import React, {FC} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Colors, CreateTaskDimension, Positions, Typography} from "../../../../styles";
import {Spacer} from "../../../components/Spacer";

interface Props {
    title: String,
    indication: String,
    dimension: {
        width: number,
        height?: number
    }

}

const ElementChooserContainer: FC<Props> = ({dimension, title, indication, children}) => (
    <View style={[dimension, styles.view]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.indication}>{indication}</Text>
        <Spacer.Row nbSpace={CreateTaskDimension.SPACER_TITLE_CHOOSER}/>
        {children}
        <Spacer.Row nbSpace={CreateTaskDimension.SPACER_TITLE_CHOOSER}/>
    </View>
)
const styles = StyleSheet.create({
    title: {
        ...Typography.middle_title_text,
        ...Colors.green_3_text,
        ...Positions.text_center
    },
    indication: {
        ...Typography.p_text,
        ...Positions.text_center

    },
    view: {
        ...Positions.items_center
    }

})

export default ElementChooserContainer