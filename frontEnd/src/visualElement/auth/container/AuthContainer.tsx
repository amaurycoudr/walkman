import React, {useContext} from "react";
import {Image, Platform, StyleSheet, View} from "react-native";

import SignUpContainer from "./SignUpContainer";
import GetCodeContainer from "./GetCodeContainer";
import SignInContainer from "./SignInContainer";

import {AuthContext} from "../../../features/token/contexts/AuthContext"

import {Borders, Colors, Dimension, Positions} from "../../../styles";

import TransitionScrollView from "../../components/TransitionScrollView";
import Titles from "../components/Titles";
import {Spacer} from "../../components/Spacer";
import "../../../img/auth.png";
import {GET_CODE_CONTAINER, SIGN_IN_CONTAINER, SIGN_UP_CONTAINER} from "../../../helpers/consts/AuthConst";
import {useTranslation} from "react-i18next";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {auth_container_size, auth_img_size} from "../../../styles/auth";
import OffLineModal from "../../components/OffLinePopUp";

export default function AuthContainer() {
    const {t} = useTranslation()
    const {container, netConnexion} = useContext(AuthContext)!;
    //change the position of one of this elements on the array to change Container position on the screen
    const containers = [
        [SIGN_UP_CONTAINER, <SignUpContainer/>, t('authScreen:titleSignUp')],
        [SIGN_IN_CONTAINER, <SignInContainer/>, t('authScreen:titleSignIn')],
        [GET_CODE_CONTAINER, <GetCodeContainer/>, t('authScreen:titleGetCode')],
    ]
    const auth_titles = containers.map(value => value[2]) as string[]
    const auth_containers = containers.map(value => value[0]) as string[]
    const auth_components = containers.map(value => value[1]) as JSX.Element[]
    console.log(netConnexion)
    const renderAuthComponents = (item: JSX.Element, index: number) => {

        return (
            <View
                key={index}
                style={styles.scrollViewElements}
            >
                {item}
            </View>
        )
    }
    return (

        <KeyboardAwareScrollView
            enableOnAndroid={true}
            contentContainerStyle={{flexGrow: 1}}
        >
            <View style={styles.root}>
                <OffLineModal
                    visible={!netConnexion}

                />
                <Image source={require("../../../img/auth.png")} style={styles.image}/>
                <View

                    style={{...styles.globalElement}}
                >

                    <Titles
                        means={auth_containers}
                        mean={container}
                        titles={auth_titles}
                    />
                    <Spacer.Row nbSpace={10 * Dimension.PX_CONVERSION}/>
                    <View

                        style={{...styles.scrollView}}
                    >
                        <TransitionScrollView
                            speed={600}
                            width={Dimension.CONTAINER_WIDTH}
                            items={auth_containers}
                            currentItem={container}
                        >
                            {auth_components.map((value, index) =>
                                renderAuthComponents(value, index))
                            }
                        </TransitionScrollView>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
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
        ...auth_img_size,
    },
    scrollView: {
        ...auth_container_size,
        ...Borders.border_shadow,
        ...Borders.border_radius_30,
        ...Colors.white_background
    },
    scrollViewElements: {

        ...auth_container_size
    },
    globalElement: {
        ...Positions.auth_container,
        ...Positions.items_center
    }
});
