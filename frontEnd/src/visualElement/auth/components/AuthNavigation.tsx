import React, {FC} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {AuthDimension, Colors, Dimension, Positions, Typography} from "../../../styles";
import {Spacer} from "../../components/Spacer";

const AuthNavigation: FC<{ message: string, linkName: string, container: string, changeContainer: Function }> = ({
                                                                                                                     message,
                                                                                                                     linkName,
                                                                                                                     container,
                                                                                                                     changeContainer
                                                                                                                 }) => {

    return (
        <View style={styles.view}>
            <Spacer.Column nbSpace={10}/>
            <Text style={{...Colors.black_text, ...Typography.p_text}}>
                {message}
            </Text>
            <TouchableOpacity
                onPress={() => {
                    changeContainer(container)
                }}
            >
                <Text style={{...Colors.blue_text, ...Typography.p_text}}>{linkName}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    link: {},
    text: {},
    view: {
        ...Positions.flex_row,
        ...AuthDimension.auth_nav_width,
    }
})
export default AuthNavigation;