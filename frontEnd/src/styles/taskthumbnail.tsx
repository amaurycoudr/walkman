import {PX_CONVERSION} from "./dimension";
import {Colors} from "./index";

export const ROW_SPACE = 10*PX_CONVERSION
export const ROW_SPACE_SMALL = 5*PX_CONVERSION
export const ROW_SPACE_BIG = 20*PX_CONVERSION

export const COL_SPACE = 20*PX_CONVERSION
export const COL_SPACE_SMALL = 10*PX_CONVERSION
export const COL_SPACE_BIG = 40*PX_CONVERSION

export const CONTAINER_PAD = 15*PX_CONVERSION

export const ICON_SIZE = 20*PX_CONVERSION

export const ICON_SIZE_BIG = 30*PX_CONVERSION
export const ICON_WIDTH_BIG = 38*PX_CONVERSION

export const FREQ_PADDING = 6*PX_CONVERSION
export const DUR_PADDING = 4*PX_CONVERSION

export const legend = {
    color : Colors.grey_light,
    fontSize : 12*PX_CONVERSION,
    fontFamily : 'Lato_400Regular'
}

export const card_title_text = {
    fontSize : 20*PX_CONVERSION,
    fontFamily : 'Lato_700Bold'
}

export const card_title_text_edit = {
    fontSize : 20*PX_CONVERSION,
    fontFamily : 'Lato_700Bold_Italic'
}

export const highlight_field_round = {
    backgroundColor : Colors.grey_middle,
    borderRadius : "50%",
}
export const highlight_field_pills = {
    backgroundColor : Colors.grey_middle,
    borderRadius : 10*PX_CONVERSION,
}