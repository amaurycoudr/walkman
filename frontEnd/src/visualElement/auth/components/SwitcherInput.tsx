import Switcher from "./Switcher";
import TransitionScrollView from "../../components/TransitionScrollView";
import {View} from "react-native";
import {CONTAINER_WIDTH} from "../../../styles/dimension";
import PhoneInput from "./PhoneInput";
import EmailInput from "./EmailInput";
import React, {FC} from "react";
import {Mean} from "../../../features/token/contexts/AuthContext";
import {MEANS, SPEED_TRANSITION_SWITCHER} from "../../../helpers/consts/AuthConst";

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

            <Switcher mean={mean} changeMean={changeMean}/>

            <TransitionScrollView speed={SPEED_TRANSITION_SWITCHER} width={CONTAINER_WIDTH} items={MEANS} currentItem={mean}>
                <View style={{width: CONTAINER_WIDTH}}>
                    <PhoneInput
                        identificationChange={identificationChange}
                        identification={identification}
                        identificationIsValid={identificationIsValid}
                    />
                </View>
                <View style={{width: CONTAINER_WIDTH}}>
                    <EmailInput
                        identificationChange={identificationChange}
                        identification={identification}
                        identificationIsValid={identificationIsValid}
                    />
                </View>
            </TransitionScrollView>
        </View>
    )
}
export default SwitcherInput