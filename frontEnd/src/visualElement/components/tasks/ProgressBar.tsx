import React, { FC } from 'react'
import { View, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native'

interface Props {
    fullWidth: number,
    progressWidth: number,
    height: number,
    colorCompleted: string,
    backgroundColor: string,
    style?: StyleProp<ViewStyle | TextStyle>
}

// progressWidth = percentage
const ProgressBar: FC<Props> = ({ fullWidth, progressWidth, height, colorCompleted, backgroundColor, style }) => {

    const styles = StyleSheet.create({
        container: {
            width: fullWidth,
            backgroundColor: backgroundColor,
            height: height
        },
        progress: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${progressWidth}%`,
            backgroundColor: colorCompleted
        }
    });


    return (
        <View
            style={[styles.container]}
        >
            <View
                style={[styles.progress]}
            >
            </View>
        </View>
    )
};

export default ProgressBar;
