import React, {FC, useEffect, useState} from 'react'
import {
    Animated,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import {Borders, Dimension, Colors, Positions, Typography} from "../../../styles";
import { SPEED_TRANSITION_SWITCHER} from "../../../helpers/consts/AuthConst";


const SwitcherButton: FC<{ text: string, changer: Function, selected: boolean }> = ({text, changer, selected}) => {
    const colorRange = [Colors.grey_dark, Colors.white_custom]
    const [switcherColor] = useState(new Animated.Value(0))
    useEffect(() => {
        Animated.timing(switcherColor, {
            toValue: selected ? 1 : 0,
            duration: SPEED_TRANSITION_SWITCHER,
            useNativeDriver: false
        }).start();
    }, [selected]);
    const color = switcherColor.interpolate({
        inputRange: [0, 1],
        outputRange: colorRange
    })
    const colorStyle = {
        color: color
    }
    return (
        <TouchableOpacity
            style={styles.viewStyle}
            onPress={() => changer()}
            activeOpacity={0.8}
        >
            <Animated.Text
                style={{...styles.textStyle, ...colorStyle}}
            >
                {text}
            </Animated.Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        ...Borders.border_radius_20,
        ...Dimension.switcher_button_size,
        ...Positions.content_items_center
    },
    textStyle: {
        ...Typography.title_text,

    }

})
export default SwitcherButton;
