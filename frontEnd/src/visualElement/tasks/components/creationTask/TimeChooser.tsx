import React, {FC, useState} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";


import {Borders, Colors, CreateTaskDimension, Dimension, Positions, Typography} from "../../../../styles";
import CustomPicker from "../../../components/CustomPicker";

type multipliers = {
    [key: number]: string
}

interface Props {
    min: number,
    max: number,
    multipliers: multipliers,
    handleChange: (newValue: number) => void
}

const TimeChooser: FC<Props> = ({multipliers, max, min, handleChange,}) => {
    const wholeNumbers: string[] = Array(max - min + 1).fill(min).map((value, index) => (value + index).toString())
    const multipliersStr: string[] = Object.values(multipliers);
    const multipliersNumb: number[] = Object.keys(multipliers).map(value => parseInt(value));
    const [currentTime, setCurrentTime] = useState({number: 0, multiplier: 0})
    const setCurrentNumber = (number: number) => {
        handleChange(multipliersNumb[currentTime.multiplier] * number)
        setCurrentTime(prevState => ({...prevState, number}))
    }
    const setCurrentMultiplier = (multiplier: number) => {
        handleChange(multipliersNumb[multiplier] * currentTime.number)
        setCurrentTime(prevState => ({...prevState, multiplier}))
    }
    return (
        <View
            style={styles.viewInputStyle}
        >
            {
                wholeNumbers.length ?
                    <View
                        style={styles.viewFlexPosition}
                    >
                        <View>
                            <CustomPicker
                                currentIndex={currentTime.number}
                                setIndex={setCurrentNumber}
                                textStyle={{...Typography.input_text, ...CreateTaskDimension.font_picker}}
                                itemSelectedColor={Colors.grey_dark}
                                itemUnSelectedColor={Colors.grey_light}
                                array={wholeNumbers}
                                pickerSize={CreateTaskDimension.number_picker_size}
                            />
                        </View>
                        <View>

                            <CustomPicker
                                currentIndex={currentTime.multiplier}
                                setIndex={setCurrentMultiplier}
                                textStyle={{...Typography.input_text, ...CreateTaskDimension.font_picker}}
                                itemSelectedColor={Colors.grey_dark}
                                itemUnSelectedColor={Colors.grey_light}
                                array={multipliersStr}
                                pickerSize={CreateTaskDimension.multiplier_picker_size}
                            />
                        </View>
                    </View>
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    viewInputStyle: {

        ...CreateTaskDimension.picker_size,
        ...Colors.white_background,
        ...Borders.border_radius_20,
        ...Borders.border_shadow,
    },
    viewFlexPosition: {
        ...Positions.flex_row,
        justifyContent: "center",
    },


})
export default TimeChooser
