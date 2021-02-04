import React, { FC } from "react";
import { IconComponentType } from "./IconName";
import Svg, { Path, Rect } from "react-native-svg";

const DoneIcon: FC<IconComponentType> = ({ width, height, color }) => (
  <>
    <Svg width={width} height={height} viewBox="0 0 23 16" fill="none">
      <Path
        d="M8.05257 16C7.65935 16 7.26612 15.8502 6.96659 15.5499C6.36677 14.9501 6.36677 13.9778 6.96659 13.378L19.8947 0.449869C20.4938 -0.149956 21.4676 -0.149956 22.0667 0.449869C22.6665 1.04969 22.6665 2.02201 22.0667 2.62183L9.13856 15.5507C8.83903 15.8502 8.4458 16 8.05257 16Z"
        fill={color}
      />
      <Path
        d="M8.05251 16C7.65929 16 7.26606 15.8502 6.96653 15.5499L0.449869 9.03327C-0.149956 8.43345 -0.149956 7.46113 0.449869 6.86131C1.04893 6.26148 2.02278 6.26148 2.62183 6.86131L9.1385 13.378C9.73832 13.9778 9.73832 14.9501 9.1385 15.5499C8.83897 15.8502 8.44574 16 8.05251 16Z"
        fill={color}
      />
    </Svg>
  </>
);
export default DoneIcon;
