import {Dimensions, ImageStyle, ViewStyle} from "react-native";

//SCREEN CONST
export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;

//CONVERSION WITH FIGMA FRAME 375*812
export const PX_WIDTH_CONVERSION = SCREEN_WIDTH / 375;
export const PX_HEIGHT_CONVERSION = SCREEN_HEIGHT / 812;

export const PX_CONVERSION=Math.min(PX_HEIGHT_CONVERSION,PX_WIDTH_CONVERSION)


//AUTH PX ELEMENTS
export const AUTH_TOP_HEIGHT = 233 * PX_CONVERSION;
export const AUTH_IMG_SIZE = 260 * PX_CONVERSION;
export const AUTH_IMG_RATIO = 1500 / 1014
export const SWITCHER_INPUT_WIDTH = 320 *PX_CONVERSION
export const BUTTON_WIDTH = 210 *PX_CONVERSION
export const CONTAINER_WIDTH = 347 *PX_CONVERSION

export const SWITCHER_HEIGHT = 70 * PX_CONVERSION
export const INPUT_HEIGHT = 80 * PX_CONVERSION

export const CONTAINER_AUTH_HEIGHT = 500 * PX_CONVERSION;
export const AUTH_SPACER_TITLE_CONTAINER = 10 * PX_CONVERSION;
export const BIG_TITLE_SIZE = 50 * PX_CONVERSION;


export const switcher_size = {
    height: SWITCHER_HEIGHT,
    width: SWITCHER_INPUT_WIDTH
}
export const switcher_button_size = {
    height: SWITCHER_HEIGHT,
    width: SWITCHER_INPUT_WIDTH / 2
}
export const button_size = {
    height: SWITCHER_HEIGHT,
    width: BUTTON_WIDTH
}
export const auth_container_size = {
    width: CONTAINER_WIDTH,
    height: CONTAINER_AUTH_HEIGHT,
}
export const title_height = {
    height: BIG_TITLE_SIZE,
}
export const title_lineHeight = {
    lineHeight: BIG_TITLE_SIZE
}
export const auth_img_size: ImageStyle = {
    width: AUTH_IMG_RATIO * AUTH_IMG_SIZE,
    height: AUTH_IMG_SIZE,
}