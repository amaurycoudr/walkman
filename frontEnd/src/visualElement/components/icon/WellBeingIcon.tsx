import React, {FC} from "react";
import {IconComponentType} from "./IconName";
import Svg, {Path} from "react-native-svg";

const WellBeingIcon: FC<IconComponentType> = ({width, height, color}) => (
    <>
        <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
            <Path
                d="M62.5383 47.2853L52.8319 69.4716C51.6601 72.1723 48.2618 72.083 47.1877 69.3376L36.075 41.1473L30.216 57.1508H11.8382L47.4806 98.778C48.8673 100.407 51.1132 100.407 52.4999 98.778L88.1618 57.1508H66.8545L62.5383 47.2853ZM92.5171 9.36332L92.0483 8.80531C81.9903 -2.9351 65.5264 -2.9351 55.4489 8.80531L50 15.1889L44.5511 8.82763C34.4931 -2.93511 18.0097 -2.93511 7.95166 8.82763L7.48294 9.36332C-2.02823 20.4788 -2.43836 38.1787 6.05724 50.0084H26.0561L33.0674 30.7684C34.122 27.8891 37.6765 27.8221 38.8092 30.6791L50.1758 59.5391L59.7455 37.6876C60.8978 35.0538 64.1789 35.0538 65.3311 37.6876L70.7215 50.0084H93.9428C102.438 38.1787 102.028 20.4788 92.5171 9.36332V9.36332Z"
                fill={color}/>
        </Svg>
    </>
)
export default WellBeingIcon