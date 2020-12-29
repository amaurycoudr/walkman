import React, {FC} from 'react'
import {View} from 'react-native'

import SwitcherButton from "./SwitcherButton";
import {Borders, Dimension, Colors, Positions} from "../../../styles/Index";
import {MEAN_MAIL, MEAN_PHONE} from "../../../features/token/AuthConst";
import {Mean} from "../../../features/token/contexts/AuthContext";


const Switcher: FC<{ mean: Mean, changeMean: Function }> = ({mean, changeMean}) => {
    return (
        <View
            style={{...Colors.white_background,...Positions.flex_row, ...Dimension.switcher_size, ...Borders.border_shadow,...Borders.border_radius_20}}>
            <SwitcherButton
                text="Telephone"
                changer={() => changeMean(MEAN_PHONE)}
                selected={mean === MEAN_PHONE}
            />
            <SwitcherButton
                text="Email"
                changer={() => changeMean(MEAN_MAIL)}
                selected={mean === MEAN_MAIL}
            />
        </View>
    )
}


export default Switcher;