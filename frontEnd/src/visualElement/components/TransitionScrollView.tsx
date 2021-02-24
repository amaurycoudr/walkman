import React, {FC, RefObject, useEffect, useRef, useState} from "react";
import {Animated, ScrollView, View} from "react-native";
import {CONTAINER_WIDTH} from "../../styles/dimension";
import {Positions} from "../../styles";

type TransitionScrollViewProps = {
    items?: string[],
    currentItem: string|number,
    width: number,
    speed: number
}
const TransitionScrollView: FC<TransitionScrollViewProps> = (
    {
        items,
        currentItem,
        width,
        speed,
        children
    }) => {
    //ref for the animation
    const view: RefObject<View> = useRef(null)
    //value of lef for the view
    const [leftAnimation] = useState(new Animated.Value(0))
    //useEffect that handle the animation
    useEffect(() => {
        const index = items ? items.indexOf(currentItem) : currentItem
        Animated.timing(leftAnimation, {
            toValue: -index * width,
            duration: speed,
            useNativeDriver: false
        }).start();
    }, [currentItem])

    const leftStyle = {
        left: leftAnimation
    }

    return (
        <View style={{overflow: "hidden", width: width}}>
            <Animated.View
                style={{...Positions.flex_row, ...leftStyle}}
                ref={view}

            >
                {children}
            </Animated.View>
        </View>
    )

}
export default TransitionScrollView;