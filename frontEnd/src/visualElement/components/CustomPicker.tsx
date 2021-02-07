import React from "react";
import {Platform, ScrollView, Text, TextStyle, View, ViewStyle} from "react-native";

interface Size {
    width: number,
    height: number,
}

interface PickerProps {
    currentIndex: number,
    setIndex: (newIndex: number) => void,
    textStyle: TextStyle,
    itemSelectedColor: string,
    itemUnSelectedColor: string,
    array: string[],
    pickerSize: Size,
}

interface ItemProps {
    value: string,
    style: ViewStyle,
    textStyle: TextStyle,
    selected: boolean,
    itemSelectedColor: string,
    itemUnSelectedColor: string,
}

const PickerItem = (
    {
        value,
        style,
        selected,
        textStyle,
        itemSelectedColor,
        itemUnSelectedColor
    }: ItemProps) => (
    <View style={style}>
        <Text style={[{color: selected ? itemSelectedColor : itemUnSelectedColor}, textStyle]}>
            {value}
        </Text>
    </View>
)
const CustomPicker = ({currentIndex, setIndex, array, pickerSize, itemSelectedColor, itemUnSelectedColor, textStyle}: PickerProps) => {
    console.log(pickerSize.height, "height")
    const selectItem = (pxValue: number) => {
        setIndex(Math.floor((pickerSize.height / 4 + pxValue) / pickerSize.height * 2))
    }


    const itemSize: ViewStyle = {
        alignItems: "center",
        justifyContent: "center",
        height: pickerSize.height / 2,
    }
    const pickerStyle: ViewStyle = {

        width: pickerSize.width,
        height: pickerSize.height,
        maxHeight: pickerSize.height
    }

    return (

        <ScrollView
            onScroll={(event) => {
                selectItem(event.nativeEvent.contentOffset.y);
            }}
            showsVerticalScrollIndicator={false}

            scrollEventThrottle={12}
            decelerationRate={"fast"}
            snapToInterval={pickerSize.height / 2}

            snapToEnd={false}
            style={pickerStyle}
        >
            <View style={{height: pickerSize.height / 4}}/>
            {array.map((value, index) =>
                <PickerItem
                    textStyle={textStyle}
                    selected={index == currentIndex}
                    style={itemSize}
                    itemSelectedColor={itemSelectedColor}
                    itemUnSelectedColor={itemUnSelectedColor}
                    key={value}
                    value={value}
                />
            )}
            <View style={{height: pickerSize.height / 4}}/>
        </ScrollView>


    );
}
export default CustomPicker;

