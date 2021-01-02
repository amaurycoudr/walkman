import {Dimensions, ImageStyle, ViewStyle} from "react-native";

//SCREEN CONST
export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;

//CONVERSION WITH FIGMA FRAME 375*875
export const PX_WIDTH_CONVERSION = SCREEN_WIDTH / 375;
export const PX_HEIGHT_CONVERSION = SCREEN_HEIGHT / 812;

//AUTH PX ELEMENTS
export const SWITCHER_INPUT_WIDTH = 320 * PX_WIDTH_CONVERSION;
export const SWITCHER_INPUT_HEIGHT =70 * PX_HEIGHT_CONVERSION
export const CONTAINER_WIDTH = 347 * PX_WIDTH_CONVERSION;
export const CONTAINER_AUTH_HEIGHT = 500 * PX_HEIGHT_CONVERSION;
export const AUTH_TOP_HEIGHT = 233 * PX_HEIGHT_CONVERSION;
export const AUTH_SPACER_TITLE_CONTAINER = 10 * PX_HEIGHT_CONVERSION;
export const AUTH_IMG_SIZE=260*PX_HEIGHT_CONVERSION;
export const AUTH_IMG_RATIO=1500/1014
export const AUTH_TITLE_SIZE = 50 * PX_HEIGHT_CONVERSION;


export const switcher_size = {
    height: SWITCHER_INPUT_HEIGHT,
    width: SWITCHER_INPUT_WIDTH
}
export const switcher_button_size = {
    width: SWITCHER_INPUT_WIDTH / 2
}
export const auth_container_size = {
    width: CONTAINER_WIDTH,
    height: CONTAINER_AUTH_HEIGHT,
}
export const title_height = {
    height: AUTH_TITLE_SIZE,
}
export const title_lineHeight = {
    lineHeight: AUTH_TITLE_SIZE
}
export const auth_img_size:ImageStyle = {
    width: AUTH_IMG_RATIO*AUTH_IMG_SIZE,
    height:AUTH_IMG_SIZE,
}