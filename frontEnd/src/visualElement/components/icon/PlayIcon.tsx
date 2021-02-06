import React, { FC } from "react";
import { IconComponentType } from "./IconName";
import Svg, { Path } from "react-native-svg";

const PlayIcon: FC<IconComponentType> = ({ width, height, color }) => (
  <>
    <Svg width={width} height={height} viewBox="0 0 15 17" fill="none">
      <Path
        d="M1.02726 16.24C0.849822 16.24 0.674721 16.1933 0.513628 16.0999C0.191443 15.9131 0 15.5816 0 15.2104V1.02959C0 0.658378 0.191443 0.32452 0.513628 0.14008C0.835814 -0.0466935 1.2187 -0.0466935 1.54089 0.14008L13.8213 7.23049C14.1435 7.41726 14.3349 7.74879 14.3349 8.12C14.3349 8.49121 14.1435 8.82507 13.8213 9.00951L1.54089 16.0999C1.37979 16.1933 1.20236 16.24 1.02726 16.24ZM1.12064 1.19068V15.047L13.1209 8.11767L1.12064 1.19068Z"
        fill={color}
      />
    </Svg>
  </>
);
export default PlayIcon;
