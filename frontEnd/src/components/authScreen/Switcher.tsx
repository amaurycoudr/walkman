import React, {FC} from 'react'
import { View, StyleSheet } from 'react-native'

import SwitcherButton from "./SwitcherButton";

import globalStyles from "../../styles/global"

const Switcher:FC<{mean:"email"|"phone",changeMean:Function}> = ({mean,changeMean}) => {
    return (
        <View style={{...styles.root,...globalStyles.margin5}}>
            <SwitcherButton 
            text="phone"
            changer={changeMean}
            selected={mean==="phone"}
            />
            <SwitcherButton 
            text="email"
            changer={changeMean}
            selected={mean==="email"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root : {
        flexDirection : "row",
        justifyContent : "space-between"
    },
})

export default Switcher;