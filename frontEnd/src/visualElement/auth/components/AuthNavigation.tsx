import React, {FC} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Colors, Positions,Typography} from "../../../styles";
import {Spacer} from "../../components/Spacer";

const AuthNavigation:FC<{message:string,linkName:string,container:string,changeContainer:Function}> = ({message,linkName,container,changeContainer}) => {

    return (
        <View style={{...Positions.flex_row}}>
            <Spacer.Column nbSpace={10}/>
            <Text style={{...Colors.black_text,...Typography.p_text}}>
                {message}
            </Text>
                <TouchableOpacity
                onPress={() => {changeContainer(container)}}
                >
                    <Text style={{...Colors.blue_text,...Typography.p_text}}>{linkName}</Text>
                </TouchableOpacity>
        </View>
    )
}

export default AuthNavigation;