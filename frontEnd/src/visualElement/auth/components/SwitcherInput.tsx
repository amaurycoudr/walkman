import Switcher from "./Switcher";
import TransitionScrollView from "../../components/TransitionScrollView";
import { View } from "react-native";
import { CONTAINER_WIDTH } from "../../../styles/dimension";
import AuthInput from "./AuthInput"
import React, { FC } from "react";
import { Mean } from "../../../features/token/contexts/AuthContext";
import { MEANS, SPEED_TRANSITION_SWITCHER } from "../../../helpers/consts/AuthConst";

import { Spacer } from "../../components/Spacer"

type Props = {
    identificationIsValid: boolean,
    identificationChange: Function,
    identification: string,
    mean: Mean,
    changeMean: Function,
}
const SwitcherInput: FC<Props> = (
    {
        identificationIsValid,
        identificationChange,
        identification,
        mean,
        changeMean
    }
) => {
    return (
        <View>

            <Switcher mean={mean} changeMean={changeMean} />

            <Spacer.Row nbSpace={15} />

            <TransitionScrollView speed={SPEED_TRANSITION_SWITCHER} width={CONTAINER_WIDTH} items={MEANS} currentItem={mean}>
                <View style={{ width: CONTAINER_WIDTH }}>
                    <AuthInput
                        field="phone"
                        fieldChange={identificationChange}
                        fieldValue={identification}
                        fieldIsValid={identificationIsValid}
                    />
                    <Spacer.Row nbSpace={15} />

                </View>
                <View style={{ width: CONTAINER_WIDTH }}>
                    <AuthInput
                        field="mail"
                        fieldChange={identificationChange}
                        fieldValue={identification}
                        fieldIsValid={identificationIsValid}
                    />
                    <Spacer.Row nbSpace={15} />
                </View>
            </TransitionScrollView>

        </View>
    )
}
export default SwitcherInput