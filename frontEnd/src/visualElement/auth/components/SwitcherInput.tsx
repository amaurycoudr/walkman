import Switcher from "./Switcher";
import TransitionScrollView from "../../components/TransitionScrollView";
import {View} from "react-native";
import {Dimension, Positions} from "../../../styles";
import AuthInput from "./AuthInput"
import React, {FC} from "react";
import {Mean} from "../../../features/token/contexts/AuthContext";
import {MEAN_MAIL, MEAN_PHONE, MEANS, SPEED_TRANSITION_SWITCHER} from "../../../helpers/consts/AuthConst";

import {Spacer} from "../../components/Spacer"


type Props = {
    identificationIsValid: boolean,
    identificationChange: Function,
    identification: string,
    mean: Mean,
    changeMean: Function,
    spacerPx:number,
}
const SwitcherInput: FC<Props> = (
    {
        identificationIsValid,
        identificationChange,
        identification,
        mean,
        changeMean,
        spacerPx,
    }
) => {
    return (
        <View style={{width: Dimension.CONTAINER_WIDTH}}>

            <Switcher mean={mean} changeMean={changeMean}/>

            <Spacer.Row nbSpace={spacerPx }/>

            <TransitionScrollView speed={SPEED_TRANSITION_SWITCHER} width={Dimension.CONTAINER_WIDTH} items={MEANS}
                                  currentItem={mean}>
                <View style={{width: Dimension.CONTAINER_WIDTH}}>
                    <View style={{alignSelf:"center"}}>
                    <AuthInput
                        field={MEAN_PHONE}
                        fieldChange={identificationChange}
                        fieldValue={identification}
                        fieldIsValid={identificationIsValid}
                    />
                    </View>
                    <Spacer.Row nbSpace={spacerPx }/>
                </View>
                <View style={{width: Dimension.CONTAINER_WIDTH}}>
                    <View style={{alignSelf:"center"}}>
                    <AuthInput
                        field={MEAN_MAIL}
                        fieldChange={identificationChange}
                        fieldValue={identification}
                        fieldIsValid={identificationIsValid}
                    />
                    </View>
                    <Spacer.Row nbSpace={spacerPx }/>
                </View>
            </TransitionScrollView>
        </View>
    )
}
export default SwitcherInput