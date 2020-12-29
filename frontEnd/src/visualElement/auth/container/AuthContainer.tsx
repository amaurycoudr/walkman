import React, {RefObject, useContext, useEffect, useRef} from "react";
import {View, StyleSheet, StatusBar, ScrollView, Dimensions} from "react-native";

import SignUpContainer from "./SignUpContainer";
import GetCodeContainer from "./GetCodeContainer";
import SignInContainer from "./SignInContainer";
import ErrorMessage from "../components/ErrorMessage";

import {AuthContext} from "../../../features/token/contexts/AuthContext"
import {blue, green_0} from "../../../styles/colors";
import {Borders, Colors, Dimension, Positions} from "../../../styles/Index";
import {AUTH_WIDTH} from "../../../styles/dimension";
import {GET_CODE_CONTAINER, SIGN_IN_CONTAINER, SIGN_UP_CONTAINER} from "../../../features/token/AuthConst";

export default function AuthContainer() {

    const {container, errorMessage} = useContext(AuthContext)!;
    const scrollView: RefObject<ScrollView> = useRef(null)
    useEffect(() => {
        if (scrollView.current) {
            if (container === SIGN_UP_CONTAINER) {
                scrollView.current.scrollTo({x: AUTH_WIDTH * 0})
            }
            if (container === GET_CODE_CONTAINER) {
                scrollView.current.scrollTo({x: AUTH_WIDTH * 1})
            }
            if (container === SIGN_IN_CONTAINER) {
                scrollView.current.scrollTo({x: AUTH_WIDTH * 2})
            }
        }
    }, [container])
    return (
        <View style={styles.root}>
            <View
                style={{...styles.scrollView}}
            >


                <ScrollView
                    ref={scrollView}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                >
                    <View style={styles.scrollViewElements}>
                        <SignUpContainer/>
                    </View>
                    <View style={styles.scrollViewElements}>
                        <GetCodeContainer/>
                    </View>
                    <View style={styles.scrollViewElements}>
                        <SignInContainer/>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: green_0,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    scrollView: {
        width: Dimension.AUTH_WIDTH,
        height: 500,
        ...Borders.border_shadow,
        ...Borders.border_radius_30,
        ...Colors.white_background
    },
    scrollViewElements: {
        width: Dimension.AUTH_WIDTH
    }
});
