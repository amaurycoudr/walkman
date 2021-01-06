import React, {useContext} from "react";
import {View, StyleSheet, Image, KeyboardAvoidingView} from "react-native";

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
import {
    GET_CODE_CONTAINER,
    SIGN_IN_CONTAINER,
    SIGN_UP_CONTAINER
} from "../../../helpers/consts/AuthConst";
import {useTranslation} from "react-i18next";


export default function AuthContainer() {
    const {t} = useTranslation()
    const {container} = useContext(AuthContext)!;
    //change the position of one of this elements on the array to change Container position on the screen
    const containers = [
        [SIGN_UP_CONTAINER, <SignUpContainer/>, t('authScreen:titleSignUp')],
        [SIGN_IN_CONTAINER, <SignInContainer/>, t('authScreen:titleSignIn')],
        [GET_CODE_CONTAINER, <GetCodeContainer/>, t('authScreen:titleGetCode')],
    ]
    const auth_titles = containers.map(value => value[2]) as string[]
    const auth_containers = containers.map(value => value[0]) as string[]
    const auth_components = containers.map(value => value[1]) as JSX.Element[]

    const renderAuthComponents = (item: JSX.Element, ind:number) => {

        return (
            <KeyboardAvoidingView style={styles.scrollViewElements} key={ind}>
                {item}
            </KeyboardAvoidingView>
        )
    }
    return (
        <View style={styles.root}>
            <Image source={require("../../../img/auth.png")} style={styles.image}/>
            <View
                style={{...styles.globalElement}}
            >

                <Titles
                    means={auth_containers}
                    mean={container}
                    titles={auth_titles}
                />
                <Spacer.Row nbSpace={10 * PX_HEIGHT_CONVERSION}/>

                <View
                    style={{...styles.scrollView}}
                >
                    <TransitionScrollView
                        speed={600}
                        width={CONTAINER_WIDTH}
                        items={auth_containers}
                        currentItem={container}
                    >
                        {auth_components.map((value,ind) => renderAuthComponents(value,ind))}
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
