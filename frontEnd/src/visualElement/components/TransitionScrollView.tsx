import React, {FC, RefObject, useEffect, useRef, useState} from "react";
import {Animated, ScrollView, View} from "react-native";
import {CONTAINER_WIDTH} from "../../styles/dimension";
import {Positions} from "../../styles";

type TransitionScrollViewProps = {
    items: string[],
    currentItem: string,
    width: number,
    speed:number
}
const TransitionScrollView: FC<TransitionScrollViewProps> = ({items, currentItem, width,speed, children}) => {
    const view: RefObject<View> = useRef(null)
    const [leftAnimation] = useState(new Animated.Value(0))
    useEffect(() => {
        const index = items.indexOf(currentItem)
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
        <View style={{overflow:"hidden",width:width}}>
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