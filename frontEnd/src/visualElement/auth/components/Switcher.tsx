import React, {FC} from 'react'
import {View} from 'react-native'

import SwitcherButton from "./SwitcherButton";
import {Borders, Dimension, Colors, Positions} from "../../../styles/Index";

import {Mean} from "../../../features/token/contexts/AuthContext";
import {MEAN_MAIL,MEAN_PHONE} from "../../../helpers/consts/AuthConst";
import {useTranslation} from "react-i18next";


const Switcher: FC<{ mean: Mean, changeMean: Function }> = ({mean, changeMean}) => {
    const {t}=useTranslation()
    return (
        <View
            style={{...Colors.white_background,...Positions.flex_row, ...Dimension.switcher_size, ...Borders.border_shadow,...Borders.border_radius_20}}>
            <SwitcherButton
                text={t('authScreen:phone')}
                changer={() => changeMean(MEAN_PHONE)}
                selected={mean === MEAN_PHONE}
            />
            <SwitcherButton
                text={t('authScreen:email')}
                changer={() => changeMean(MEAN_MAIL)}
                selected={mean === MEAN_MAIL}
            />
        </View>
    )
}


export default Switcher;