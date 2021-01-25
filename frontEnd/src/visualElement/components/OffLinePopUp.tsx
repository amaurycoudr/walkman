import React, {useEffect, useState} from "react";
import {Animated, StyleSheet, Text, View} from "react-native";
import {Borders, Colors, Dimension, Positions, Typography} from "../../styles";
import OfflineSVG from "../../img/offlinecircle.svg";
import {Spacer} from "./Spacer";
import {useTranslation} from "react-i18next";


type ModalType = {
    visible: boolean,

}
export default ({visible}: ModalType) => {
    const {t} = useTranslation()
    const [topPosition] = useState(new Animated.Value(0))
    useEffect(() => {
        Animated.timing(topPosition, {
            toValue: visible ? Dimension.POPUP_TOP : -Dimension.POPUP_HEIGHT,
            duration: 500,
            useNativeDriver: false
        }).start();
    }, [visible]);
    return (
        <>
            <Animated.View
                style={{...styles.view,top:topPosition}}
            >

                <OfflineSVG width={Dimension.POPUP_HEIGHT} height={Dimension.POPUP_HEIGHT}/>

                <Text
                    style={styles.text}
                >
                    {t('popup:offline')}
                </Text>
                <Spacer.Column nbSpace={Dimension.POPUP_HEIGHT}/>
            </Animated.View>

        </>

    )
}
const styles = StyleSheet.create({
    view: {
        zIndex: 1,
        ...Positions.position_absolute,
        ...Colors.white_background,
        ...Dimension.popup_dimension,
        ...Borders.border_shadow,
        ...Borders.border_radius_30,
        ...Positions.items_center,
        ...Positions.flex_row,
    },
    svgView: {
        ...Positions.position_absolute,
    },
    text: {
        ...Typography.popup_text,
        flexGrow: 1,
        ...Positions.text_center,
        ...Colors.red_text

    }
})