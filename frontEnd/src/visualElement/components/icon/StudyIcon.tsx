import React, {FC} from "react";
import {IconComponentType} from "./IconName";
import Svg, {Path} from "react-native-svg";

const StudyIcon: FC<IconComponentType> = ({width, height, color}) => (
    <>
        <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
            <Path
                d="M73.0748 83.6741C70.9519 83.6741 69.2289 81.8456 69.2289 79.5926V40.8185C69.2289 38.5655 70.9519 36.737 73.0748 36.737C75.1977 36.737 76.9207 38.5655 76.9207 40.8185V79.5926C76.9207 81.8456 75.1977 83.6741 73.0748 83.6741Z"
                fill={color}/>
            <Path
                d="M73.075 100C66.7119 100 61.5373 94.5084 61.5373 87.7555C61.5373 81.0027 66.7119 75.5111 73.075 75.5111C79.438 75.5111 84.6126 81.0027 84.6126 87.7555C84.6126 94.5084 79.438 100 73.075 100ZM73.075 83.6741C70.9905 83.6741 69.2291 85.5434 69.2291 87.7555C69.2291 89.9677 70.9905 91.837 73.075 91.837C75.1594 91.837 76.9209 89.9677 76.9209 87.7555C76.9209 85.5434 75.1594 83.6741 73.075 83.6741Z"
                fill={color}/>
            <Path
                d="M39.6767 76.1561C39.0998 76.1561 38.5133 76.0193 37.9595 75.7255L15.9937 64.0708C14.0938 63.0626 13.3227 60.6117 14.2726 58.5934C15.2226 56.5812 17.5301 55.7588 19.4338 56.7669L41.3997 68.4216C43.2995 69.4298 44.0706 71.8807 43.1207 73.899C42.4457 75.3296 41.0881 76.1561 39.6767 76.1561V76.1561Z"
                fill={color}/>
            <Path
                d="M49.9994 78.7273C45.8651 78.7273 41.7288 77.7273 37.9598 75.7254C36.0599 74.7172 35.2888 72.2663 36.2388 70.248C37.1887 68.2338 39.4924 67.4113 41.4 68.4215C46.7861 71.2786 53.2126 71.2786 58.5969 68.4215C60.5006 67.4113 62.8081 68.2317 63.7581 70.248C64.708 72.2642 63.9388 74.7152 62.037 75.7254C58.27 77.7273 54.1337 78.7273 49.9994 78.7273V78.7273Z"
                fill={color}/>
            <Path
                d="M50.0038 57.1443C48.5923 57.1443 47.2347 56.3198 46.5598 54.8892C45.6098 52.873 46.379 50.422 48.2808 49.4119L94.4315 24.9229C96.3353 23.9148 98.6409 24.7331 99.5927 26.7494C100.543 28.7656 99.7735 31.2166 97.8717 32.2267L51.721 56.7157C51.1672 57.0075 50.5807 57.1443 50.0038 57.1443V57.1443Z"
                fill={color}/>
            <Path
                d="M96.1466 32.6554C95.5697 32.6554 94.9832 32.5187 94.4294 32.2248L48.2786 7.73593C46.3787 6.7278 45.6076 4.27687 46.5575 2.25858C47.5075 0.244364 49.8112 -0.578054 51.7187 0.432113L97.8695 24.921C99.7694 25.9292 100.541 28.3801 99.5906 30.3984C98.9156 31.831 97.558 32.6554 96.1466 32.6554V32.6554Z"
                fill={color}/>
            <Path
                d="M73.0711 44.8999C72.4942 44.8999 71.9077 44.7631 71.3539 44.4693L48.2784 32.2248C46.3786 31.2166 45.6074 28.7657 46.5574 26.7474C47.5073 24.7332 49.811 23.9128 51.7186 24.9209L74.794 37.1654C76.6939 38.1736 77.465 40.6245 76.5151 42.6428C75.8401 44.0754 74.4825 44.8999 73.0711 44.8999V44.8999Z"
                fill={color}/>
            <Path
                d="M17.7116 64.5011C17.1328 64.5011 16.5482 64.3644 15.9944 64.0705C12.062 61.9828 9.61792 57.785 9.61792 53.1199C9.61792 50.8669 11.3409 49.0384 13.4638 49.0384C15.5867 49.0384 17.3097 50.8669 17.3097 53.1199C17.3097 54.6749 18.125 56.0729 19.4345 56.7688C21.3363 57.781 22.1055 60.2319 21.1556 62.2461C20.4806 63.6767 19.1211 64.5011 17.7116 64.5011V64.5011Z"
                fill={color}/>
            <Path
                d="M13.4638 57.2015C11.3409 57.2015 9.61792 55.373 9.61792 53.1201V33.6759C9.61792 31.4229 11.3409 29.5944 13.4638 29.5944C15.5867 29.5944 17.3097 31.4229 17.3097 33.6759V53.1201C17.3097 55.3751 15.5867 57.2015 13.4638 57.2015Z"
                fill={color}/>
            <Path
                d="M82.2885 64.5011C80.879 64.5011 79.5195 63.6767 78.8445 62.2461C77.8946 60.2319 78.6638 57.781 80.5656 56.7688C81.8751 56.0749 82.6904 54.6749 82.6904 53.1199C82.6904 50.8669 84.4134 49.0384 86.5364 49.0384C88.6593 49.0384 90.3823 50.8669 90.3823 53.1199C90.3823 57.785 87.9382 61.9828 84.0057 64.0705C83.4519 64.3644 82.8674 64.5011 82.2885 64.5011V64.5011Z"
                fill={color}/>
            <Path
                d="M86.5355 57.2015C84.4126 57.2015 82.6896 55.373 82.6896 53.1201V33.6759C82.6896 31.4229 84.4126 29.5944 86.5355 29.5944C88.6584 29.5944 90.3814 31.4229 90.3814 33.6759V53.1201C90.3814 55.3751 88.6584 57.2015 86.5355 57.2015Z"
                fill={color}/>
            <Path
                d="M60.322 76.156C58.9105 76.156 57.5529 75.3315 56.878 73.901C55.928 71.8847 56.6972 69.4338 58.599 68.4236L80.5648 56.7689C82.4685 55.7607 84.776 56.5791 85.726 58.5953C86.6759 60.6116 85.9067 63.0625 84.0049 64.0727L62.0392 75.7274C61.4873 76.0193 60.8988 76.156 60.322 76.156V76.156Z"
                fill={color}/>
            <Path
                d="M3.85327 32.6554C2.44182 32.6554 1.08422 31.831 0.409262 30.4004C-0.540676 28.3842 0.228504 25.9332 2.1303 24.9231L48.2811 0.434143C50.1848 -0.576025 52.4924 0.244354 53.4423 2.26061C54.3923 4.27686 53.6231 6.72779 51.7213 7.73796L5.57046 32.2269C5.01665 32.5187 4.43015 32.6554 3.85327 32.6554V32.6554Z"
                fill={color}/>
            <Path
                d="M49.9956 57.1443C49.4188 57.1443 48.8323 57.0075 48.2784 56.7137L2.12771 32.2248C0.227838 31.2166 -0.543264 28.7657 0.406672 26.7474C1.35661 24.7332 3.6603 23.9128 5.56786 24.9209L51.7186 49.4099C53.6185 50.418 54.3896 52.8689 53.4396 54.8872C52.7647 56.3198 51.4071 57.1443 49.9956 57.1443V57.1443Z"
                fill={color}/>
        </Svg>

    </>
)
export default StudyIcon