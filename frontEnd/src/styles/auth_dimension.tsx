//AUTH PX ELEMENTS
import {CONTAINER_HEIGHT, CONTAINER_WIDTH, PX_CONVERSION} from "./dimension";
import {ImageStyle} from "react-native";

export const AUTH_TOP_HEIGHT = 223 * PX_CONVERSION;
export const AUTH_IMG_SIZE = 260 * PX_CONVERSION;
export const AUTH_IMG_RATIO = 1500 / 1014
export const AUTH_SPACER_TITLE_CONTAINER = 10 * PX_CONVERSION;


export const AUTH_SPACER_SIGN_UP_TOP = 30 * PX_CONVERSION;
export const AUTH_SPACER_SIGN_UP_SWITCHER = 37 * PX_CONVERSION;
export const AUTH_SPACER_SIGN_UP_NAVIGATION = 16 * PX_CONVERSION;


export const AUTH_SPACER_GET_CODE_TOP = 52 * PX_CONVERSION;
export const AUTH_SPACER_GET_CODE_SWITCHER = 41 * PX_CONVERSION;
export const AUTH_SPACER_GET_CODE_NAVIGATION = 70 * PX_CONVERSION;
export const AUTH_SPACER_GET_CODE_BT_NAVIGATION = 5 * PX_CONVERSION;

export const AUTH_SPACER_SIGN_IN_TOP = 20 * PX_CONVERSION;
export const AUTH_SPACER_SIGN_IN_BUTTON = 30 * PX_CONVERSION;

export const auth_container_size = {
    width: CONTAINER_WIDTH,
    height: CONTAINER_HEIGHT,
}
export const auth_img_size: ImageStyle = {
    width: AUTH_IMG_RATIO * AUTH_IMG_SIZE,
    height: AUTH_IMG_SIZE,
}
export const auth_nav_width = {
    width: CONTAINER_WIDTH,
}