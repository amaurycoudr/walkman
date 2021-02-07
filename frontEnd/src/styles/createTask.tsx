import {INPUT_HEIGHT, PX_CONVERSION, SWITCHER_INPUT_WIDTH} from "./dimension";

export const ICON_CIRCLE_SIZE = 55 * PX_CONVERSION;
export const ICON_SIZE = 30 * PX_CONVERSION;

export const PICKER_NUMBER_WIDTH = 40 * PX_CONVERSION
export const PICKER_NUMBER_HEIGHT = Math.floor(INPUT_HEIGHT * PX_CONVERSION / 4) * 4
export const PICKER_MULTIPLIER_WIDTH = 100 * PX_CONVERSION

export const circle_icon_size = {
    width: ICON_CIRCLE_SIZE,
    height: ICON_CIRCLE_SIZE
}
export const circle_radius = {
    borderRadius: ICON_CIRCLE_SIZE / 2
}

export const picker_size = {
    height: PICKER_NUMBER_HEIGHT,
    width:SWITCHER_INPUT_WIDTH
}

export const number_picker_size = {
    height: PICKER_NUMBER_HEIGHT,
    width: PICKER_NUMBER_WIDTH,
}
export const multiplier_picker_size = {
    height: PICKER_NUMBER_HEIGHT,
    width: PICKER_MULTIPLIER_WIDTH
}
export const font_picker = {
    fontSize: 25 * PX_CONVERSION
}