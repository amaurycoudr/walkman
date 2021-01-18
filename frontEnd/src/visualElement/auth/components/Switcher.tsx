import React, {FC, useEffect, useState} from 'react'
import {View, StyleSheet, Animated, TouchableOpacity} from 'react-native'

import SwitcherButton from "./SwitcherButton";
import {Borders, Dimension, Colors, Positions} from "../../../styles";

import {Mean} from "../../../features/token/contexts/AuthContext";
import {MEAN_MAIL, MEAN_PHONE, SPEED_TRANSITION_SWITCHER} from "../../../helpers/consts/AuthConst";
import {useTranslation} from "react-i18next";


const Switcher: FC<{ mean: Mean, changeMean: Function }> = ({mean, changeMean}) => {
    const {t} = useTranslation()
    const [switcherPosition] = useState(new Animated.Value(0))
    useEffect(() => {
        Animated.timing(switcherPosition, {
            toValue:mean===MEAN_MAIL?Dimension.SWITCHER_INPUT_WIDTH/2:0,
            duration: SPEED_TRANSITION_SWITCHER,
            useNativeDriver:false
        }).start();
    }, [mean]);
    return (
        <View
            style={styles.viewStyle}>
            <Animated.View style={{
                position: 'absolute',
                left: switcherPosition,
                right: 0,
                ...Dimension.switcher_button_size,
                ...Borders.border_radius_20,
                ...Colors.green_2_background,
                zIndex: -1,

            }}/>
            <SwitcherButton
                text={t('authScreen:phone')}
                changer={() => changeMean(MEAN_PHONE)}
                selected={mean === MEAN_PHONE}
            />
            <SwitcherButton
                text={t('authScreen:email')}
                changer={() => changeMean(MEAN_MAIL)}
                selected={mean === MEAN_MAIL}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        alignSelf:"center",
        ...Colors.white_background,
        ...Positions.flex_row,
        ...Dimension.switcher_size,
        ...Borders.border_shadow,
        ...Borders.border_radius_20,
        position: 'relative'
    }
})

export default Switcher;