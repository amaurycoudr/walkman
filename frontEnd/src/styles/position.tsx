import {ImageStyle, TextStyle, ViewStyle} from "react-native";
import {AUTH_IMG_SIZE, AUTH_SPACER_TITLE_CONTAINER, AUTH_TITLE_SIZE, AUTH_TOP_HEIGHT} from "./dimension";

export const flex_row:ViewStyle = {
    flexDirection: 'row'
}
export const flex_column:ViewStyle = {
    flexDirection: 'column'
}
export const content_items_center:ViewStyle = {
    alignItems: "center",
    justifyContent:"center",
}
export const text_center:TextStyle={
    textAlign:"center",
}
export const position_absolute:ViewStyle={
    position:"absolute"
}
export const img_position_absolute:ImageStyle={
    position:"absolute"
}
export const items_center:ViewStyle={
    alignItems: "center",
}
export const auth_img:ImageStyle={
    top:(AUTH_TOP_HEIGHT-AUTH_IMG_SIZE+AUTH_TITLE_SIZE+AUTH_SPACER_TITLE_CONTAINER),
}
export const auth_container={
    top:AUTH_TOP_HEIGHT
}