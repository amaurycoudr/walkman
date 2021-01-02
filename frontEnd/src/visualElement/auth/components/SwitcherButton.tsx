import React, {FC, useEffect, useState} from 'react'
import {Animated, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Borders, Dimension, Colors, Positions, Typography} from "../../../styles/Index";
import {MEAN_MAIL, SPEED_TRANSITION_SWITCHER} from "../../../helpers/consts/AuthConst";
import {SWITCHER_INPUT_WIDTH} from "../../../styles/dimension";
import {grey_dark, white_custom} from "../../../styles/colors";


const SwitcherButton: FC<{ text: string, changer: Function, selected: boolean }> = ({text, changer, selected}) => {
    const colorRange =  [grey_dark,white_custom]
    console.log(colorRange)
    const [switcherColor] = useState(new Animated.Value(0))
    useEffect(() => {
        Animated.timing(switcherColor, {
            toValue:selected?1:0,
            duration: SPEED_TRANSITION_SWITCHER,
            useNativeDriver: false
        }).start();
    }, [selected]);
    const color=switcherColor.interpolate({
        inputRange:[0,1],
        outputRange:colorRange
    })
    const colorStyle={
        color:color
    }
    return (

        <TouchableOpacity
            style={styles.viewStyle}
            onPress={() => changer()}
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
