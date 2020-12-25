import React, {FC} from 'react'
import {View} from 'react-native'

import SwitcherButton from "./SwitcherButton";
import {Borders, Buttons, Colors, Positions} from "../../../styles/Index";


const Switcher: FC<{ mean: "email" | "phone", changeMean: Function }> = ({mean, changeMean}) => {
    return (
        <View
            style={{...Colors.white_background,...Positions.flex_row, ...Buttons.switcher_size, ...Borders.border_shadow,...Borders.border_radius_20}}>
            <SwitcherButton
                text="Telephone"
                changer={() => changeMean("phone")}
                selected={mean === "phone"}
            />
            <SwitcherButton
                text="Email"
                changer={() => changeMean("email")}
                selected={mean === "email"}
            />
        </View>
    )
}


export default Switcher;