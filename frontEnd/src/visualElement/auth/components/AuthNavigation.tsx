import React, {FC} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {AuthDimension, Colors, Positions, Typography} from "../../../styles";
import {Spacer} from "../../components/Spacer";
import {PX_CONVERSION} from "../../../styles/dimension";

const AuthNavigation: FC<{ message: string, linkName: string, container: string, changeContainer: Function }> = ({
                                                                                                                     message,
                                                                                                                     linkName,
                                                                                                                     container,
                                                                                                                     changeContainer
                                                                                                                 }) => {

    return (
        <View style={styles.view}>
            <Spacer.Column nbSpace={10*PX_CONVERSION}/>
            <Text style={styles.text}>
                {message}
            </Text>
            <TouchableOpacity
                onPress={() => {
                    changeContainer(container)
                }}
            >
                <Text style={styles.link}>
                    {linkName}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    link: {
        ...Colors.blue_text,
        ...Typography.p_text
    },
    text: {
        ...Colors.black_text,
        ...Typography.p_text
    },
    view: {
        ...Positions.flex_row,
        ...AuthDimension.auth_nav_width,
    }
})
export default AuthNavigation;