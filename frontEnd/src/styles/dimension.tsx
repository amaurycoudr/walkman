import {Dimensions} from "react-native";

//SCREEN CONST
export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;

//CONVERSION WITH FIGMA FRAME 375*812
export const PX_WIDTH_CONVERSION = SCREEN_WIDTH / 375;
export const PX_HEIGHT_CONVERSION = SCREEN_HEIGHT / 812;

export const PX_CONVERSION = Math.min(PX_HEIGHT_CONVERSION, PX_WIDTH_CONVERSION)


export const SWITCHER_INPUT_WIDTH = 320 * PX_CONVERSION
export const BUTTON_WIDTH = 210 * PX_CONVERSION
export const CONTAINER_WIDTH = 347 * PX_CONVERSION
export const CARD_WIDTH = 350 * PX_CONVERSION

export const SWITCHER_HEIGHT = 70 * PX_CONVERSION
export const INPUT_HEIGHT = 80 * PX_CONVERSION

export const CONTAINER_HEIGHT = 500 * PX_CONVERSION;
export const BIG_TITLE_SIZE = 50 * PX_CONVERSION;

export const POPUP_TOP = 40 * PX_CONVERSION
export const POPUP_HEIGHT = 60 * PX_CONVERSION
export const POPUP_WIDTH = 260 * PX_CONVERSION


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
export const title_height = {
    height: BIG_TITLE_SIZE,
}
export const title_lineHeight = {
    lineHeight: BIG_TITLE_SIZE
}
export const popup_dimension = {
    width: POPUP_WIDTH,
    height: POPUP_HEIGHT
}

export const input_size = {
    width: SWITCHER_INPUT_WIDTH,
    height: INPUT_HEIGHT
}
export const container_width = {
    width: CONTAINER_WIDTH
}