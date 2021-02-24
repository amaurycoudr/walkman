import React from "react";
import {IconNameType} from "../../../components/icon/IconName";
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import {Borders, Colors, CreateTaskDimension, Positions} from "../../../../styles";
import Icon from "../../../components/icon/Icon";

interface Element {
    id: number,
    icon: IconNameType,
    color?: string
}

interface Props {
    elements: Element[],
    handlePress: (id: number) => void,
    viewStyle: ViewStyle,
    iconSelected: number | undefined
}

export default ({elements, handlePress, viewStyle, iconSelected}: Props) => {

    const renderIcon = (id: number, iconName: IconNameType, color?: string) => {
        const selected = (iconSelected === id)
        const viewStyle = [styles.iconStyle,
            color ?
                selected ?
                    {...styles.iconSelected, backgroundColor: color} :
                    {opacity: 0.5, backgroundColor: color}
                :
                selected ?
                    [styles.colorDefaultSelected, styles.iconSelected] :
                    styles.colorDefault


        ] as ViewStyle
        return (
            <TouchableOpacity
                onPress={() => handlePress(id)}
                key={id}
            >
                <View style={viewStyle}>

                    <Icon
                        name={iconName}
                        width={CreateTaskDimension.ICON_SIZE}
                        height={CreateTaskDimension.ICON_SIZE}
                        color={Colors.white_custom}
                    />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={viewStyle}>

            {elements.map(value => (
                renderIcon(value.id, value.icon, value.color)
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    iconStyle: {
        ...CreateTaskDimension.circle_icon_size,
        ...CreateTaskDimension.circle_radius,
        ...Positions.content_items_center
    },
    iconSelected: {
        ...Borders.border_icon_shadow
    },
    colorDefault: {
        ...Colors.grey_middle_background
    },
    colorDefaultSelected: {
        ...Colors.green_2_background
    }
})