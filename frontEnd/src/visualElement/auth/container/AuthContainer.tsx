import React, {useContext} from "react";
import {View, StyleSheet, Image} from "react-native";

import SignUpContainer from "./SignUpContainer";
import GetCodeContainer from "./GetCodeContainer";
import SignInContainer from "./SignInContainer";

import {AuthContext} from "../../../features/token/contexts/AuthContext"

import {Borders, Colors, Dimension, Positions} from "../../../styles/Index";

import TransitionScrollView from "../../components/TransitionScrollView";
import Titles from "../components/Titles";
import {CONTAINER_WIDTH, PX_HEIGHT_CONVERSION,} from "../../../styles/dimension";
import {Spacer} from "../../components/Spacer";
import "../../../img/auth.png";
import {AUTH_CONTAINERS} from "../../../helpers/consts/AuthConst";

export default function AuthContainer() {

    const {container} = useContext(AuthContext)!;
    return (
        <View style={styles.root}>
            <Image source={require("../../../img/auth.png")} style={styles.image}/>
            <View
                style={{...styles.globalElement}}
            >
                <Titles
                    means={AUTH_CONTAINERS}
                    mean={container}
                />
                <Spacer.Row nbSpace={10 * PX_HEIGHT_CONVERSION}/>

                <View
                    style={{...styles.scrollView}}
                >
                    <TransitionScrollView width={CONTAINER_WIDTH} items={AUTH_CONTAINERS} currentItem={container}>
                        <View style={styles.scrollViewElements}>
                            <SignUpContainer/>
                        </View>
                        <View style={styles.scrollViewElements}>
                            <GetCodeContainer/>
                        </View>
                        <View style={styles.scrollViewElements}>
                            <SignInContainer/>
                        </View>
                    </TransitionScrollView>
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        ...Colors.green_0_background,
        ...Positions.flex_column,
        ...Positions.items_center
    },
    image: {
        ...Positions.img_position_absolute,
        ...Positions.auth_img,
        ...Dimension.auth_img_size,
    },
    scrollView: {
        ...Dimension.auth_container_size,
        ...Borders.border_shadow,
        ...Borders.border_radius_30,
        ...Colors.white_background
    },
    scrollViewElements: {
        ...Dimension.auth_container_size
    },
    globalElement: {
        ...Positions.auth_container,
        ...Positions.items_center
    }
});
