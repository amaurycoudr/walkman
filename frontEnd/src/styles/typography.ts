import {black, blue, grey_dark, white} from "./colors";

export type TypoType =
    | 'Lato_100Thin_Italic'
    | 'Lato_100Thin'
    | 'Lato_300Light'
    | 'Lato_300Light_Italic'
    | 'Lato_400Regular'
    | 'Lato_400Regular_Italic'
    | 'Lato_700Bold'
    | 'Lato_700Bold_Italic'
    | 'Lato_900Black'
    | 'Lato_900Black_Italic';
export const black_text = {
    color: black,
}

export const white_text = {
    color: white,
}
export const grey_dark_text = {
    color: grey_dark
}
export const blue_text = {
    color: blue
}
export const p_text = {
    fontSize: 14,
    fontFamily: 'Lato_300Light'
}
export const title_text = {
    fontSize: 25,
    fontFamily: 'Lato_900Black'
}