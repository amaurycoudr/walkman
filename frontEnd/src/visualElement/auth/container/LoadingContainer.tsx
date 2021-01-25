import React from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {AuthDimension, Borders, Colors, Dimension, Positions} from "../../../styles";
import {white_custom} from "../../../styles/colors";

type Type = {
    loading: boolean
}
export default ({loading}: Type) => {


    return (
        <View
            style={{...styles.root,}}
        >
            {loading &&
            <View
                style={{...styles.view,}}
            >
                <ActivityIndicator
                    size="large"
                    color={Colors.green_3}
                />
            </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        zIndex: 10,
    },
    view: {
        ...AuthDimension.auth_container_size,
        ...Positions.position_absolute,
        ...Positions.content_items_center,
        ...Borders.border_radius_30,
        backgroundColor: white_custom,
        opacity: 0.5
    }
})