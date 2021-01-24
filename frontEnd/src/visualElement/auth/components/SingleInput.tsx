import React, {RefObject, useEffect, useRef} from "react";
import {StyleSheet, TextInput} from "react-native";
import {AuthDimension, Borders, Colors, Dimension, Positions, Typography} from "../../../styles";


type SingleInputType = {
    handleTextEditing: (index: number, text: string) => void,
    handleBackSpace: (key: string, index: number, value: string) => void,
    index: number,
    activeInput: number,
    value: string,
    handleOnFocus: (index: number) => void,
    click: boolean,
    endEditing:()=>void
}

export default ({handleTextEditing, index, activeInput, value, handleBackSpace, handleOnFocus, click,endEditing}: SingleInputType) => {
    console.log(activeInput)
    const inputRef: RefObject<TextInput> = useRef(null);
    useEffect(() => {
        console.log(activeInput, "active")
        console.log(index, "index")
        if (inputRef.current) {
            if (index === activeInput) {
                inputRef.current.focus();
            } else {
                inputRef.current.blur();
            }
        }
    }, [activeInput, click])

    return (
        <TextInput
            returnKeyType="done"
            keyboardType="numeric"
            ref={inputRef}
            style={styles.input}
            onKeyPress={e => handleBackSpace(e.nativeEvent.key, index, value)}
            onChange={e => console.log(e.nativeEvent)}
            onChangeText={text => {
                handleTextEditing(index, text)
            }}
            placeholder={"00"}
            onFocus={() => handleOnFocus(index)}
            value={value}
            onSubmitEditing={()=>{
                endEditing()
            }}
        />
    )
}
const styles = StyleSheet.create({
    input: {
        ...Borders.border_radius_15,
        ...Borders.border_shadow,
        ...Colors.white_background,
        ...AuthDimension.auth_code_input_size,
        ...Positions.text_center,
        fontSize:25,
        ...Colors.grey_dark_text
    }
})