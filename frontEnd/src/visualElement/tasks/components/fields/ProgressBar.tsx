import React, { FC } from 'react'
import { View, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native'

interface Props {
    fullWidth: number,
    progressWidth: number,
    height: number,
    colorCompleted?: string,
    backgroundColor?: string,
    style?: StyleProp<ViewStyle | TextStyle>
}

// progressWidth = percentage
const ProgressBar: FC<Props> = ({ fullWidth, progressWidth, height, colorCompleted, backgroundColor, style }) => {

    const styles = StyleSheet.create({
        container: {
            position:"relative",
            width: fullWidth+"%",
            backgroundColor: backgroundColor,
            height: height,
            borderRadius : 4,
            zIndex : -1
        },
        progress: {
            position: "absolute",
            top: 0,
            left: 0,
            zIndex : 10,
            height: "100%",
            width: progressWidth,
            backgroundColor: colorCompleted,
            borderRadius : 4
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

ProgressBar.defaultProps = {
    colorCompleted: "#1060A5",
    backgroundColor: "#B0B0B0"
}

export default ProgressBar;
