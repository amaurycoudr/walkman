//AUTH PX ELEMENTS
import {CONTAINER_HEIGHT, CONTAINER_WIDTH, PX_CONVERSION} from "./dimension";
import {ImageStyle} from "react-native";

export const AUTH_TOP_HEIGHT = 213 * PX_CONVERSION;
export const AUTH_IMG_SIZE = 250 * PX_CONVERSION;
export const AUTH_IMG_RATIO = 1500 / 1014
export const AUTH_SPACER_TITLE_CONTAINER = 10 * PX_CONVERSION;

export const AUTH_CODE_WIDTH = 40 * PX_CONVERSION;
export const AUTH_CODE_HEIGHT = 60 * PX_CONVERSION;

export const AUTH_LEFT_INPUT_INDICATOR_ERROR_MESSAGE = 30 * PX_CONVERSION;
export const AUTH_SPACER_INDICATOR = 20 * PX_CONVERSION;
export const AUTH_BOTTOM_INPUT_ERROR_MESSAGE = 3 * PX_CONVERSION;

export const AUTH_SPACER_SIGN_UP_TOP = 28 * PX_CONVERSION;
export const AUTH_SPACER_SIGN_UP_SWITCHER = 30 * PX_CONVERSION;
export const AUTH_SPACER_SIGN_UP_NAVIGATION = 25 * PX_CONVERSION;
export const AUTH_SPACER_SIGN_UP_BT_NAVIGATION = 5 * PX_CONVERSION;


export const AUTH_SPACER_GET_CODE_TOP = 52 * PX_CONVERSION;
export const AUTH_SPACER_GET_CODE_SWITCHER = 41 * PX_CONVERSION;
export const AUTH_SPACER_GET_CODE_NAVIGATION = 70 * PX_CONVERSION;
export const AUTH_SPACER_GET_CODE_BT_NAVIGATION = 5 * PX_CONVERSION;

export const AUTH_SPACER_SIGN_IN_TOP = 20 * PX_CONVERSION;

export const AUTH_ERROR_MESSAGE_HEIGHT = 18 * PX_CONVERSION;

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

export const auth_error_message_position = {
    left: AUTH_LEFT_INPUT_INDICATOR_ERROR_MESSAGE,
    bottom: AUTH_BOTTOM_INPUT_ERROR_MESSAGE
}
export const auth_code_input_size = {
    width: AUTH_CODE_WIDTH,
    height: AUTH_CODE_HEIGHT
}
export const error_message_lineHeight = {
    lineHeight: AUTH_ERROR_MESSAGE_HEIGHT
}