import React, {FC, RefObject, useEffect, useRef} from "react";
import {ScrollView} from "react-native";
import {CONTAINER_WIDTH} from "../../styles/dimension";

type TransitionScrollViewProps = {
    items: string[],
    currentItem: string,
    width:number
}
const TransitionScrollView: FC<TransitionScrollViewProps> = ({items, currentItem,width, children}) => {
    const scrollView: RefObject<ScrollView> = useRef(null)
    useEffect(() => {
        const index = items.indexOf(currentItem)
        if(scrollView.current){
            scrollView.current.scrollTo({x: width * index})
        }
    }, [currentItem])

    return (
        <ScrollView

            ref={scrollView}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
        >
            {children}
        </ScrollView>
    )

}
export default TransitionScrollView;