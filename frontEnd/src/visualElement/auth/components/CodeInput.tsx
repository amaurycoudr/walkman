import React, {FC, RefObject, useCallback, useState} from "react";
import {View, StyleSheet, TextInput} from "react-native";
import SingleInput from "./SingleInput";
import {Positions} from "../../../styles";
import {CONTAINER_WIDTH} from "../../../styles/dimension";
import {Spacer} from "../../components/Spacer";

const CodeInput: FC<{ codeChange: Function }> = ({codeChange}) => {
    const length = 3;
    const [click, setClick] = useState(true);
    const [activeInput, setActiveInput] = useState(0);
    const [otpValues, setOTPValues] = useState(Array<string>(length).fill(""));

    const endEditing=()=>{
        setActiveInput(-1)
    }
    const focusInput = (number: number) => {
        console.log(Math.max(Math.min(length - 1, number), 0))
        setActiveInput(Math.max(Math.min(length - 1, number), 0))
    }
    const handleClick = () => {
        setClick(prevState => !prevState)

    }
    const updateOTPValues = (currentIndex: number, textValue: string) => {
        const updatedValues = otpValues.map((value, index) => {
            return (textValue.length <= 2 && currentIndex === index) ? textValue : value
        })
        setOTPValues(updatedValues)
    }
    const handleTextEditing = (index: number, text: string) => {
        if (text.length <= 2) {
            updateOTPValues(index, text)
        } else {
            updateOTPValues(index + 1, text[text.length - 1])
        }
        if (text.length === 0) {
            focusInput(index - 1)
        } else if (text.length >= 2) {
            focusInput(index + 1)
        }
    }
    const handleBackSpace = (key: string, index: number, value: string) => {
        console.log(key)
        console.log(value.length)
        if (key === "Backspace" && value.length === 0) {
            focusInput(index - 1)
        }

    }
    const handleOnFocus = (index: number) => {
        let inputFocus = index;
        while (inputFocus > 0 && otpValues[inputFocus - 1] === "") {

            inputFocus = inputFocus - 1
        }
        focusInput(inputFocus)
        handleClick()
    }

    return (
        <View
            style={styles.viewStyle}
        >
            {Array(length)
                .fill("")
                .map((_, index) => (
                    <View key={index}

                    >

                        <SingleInput
                            activeInput={activeInput}
                            index={index}
                            handleTextEditing={handleTextEditing}
                            value={otpValues[index]}
                            handleBackSpace={handleBackSpace}
                            handleOnFocus={handleOnFocus}
                            click={click}
                            endEditing={endEditing}
                        />
                        {
                            index < length - 1 &&
                            <Spacer.Column nbSpace={20}/>
                        }
                    </View>
                ))}
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        ...Positions.flex_row,

    }
});
export default CodeInput;
