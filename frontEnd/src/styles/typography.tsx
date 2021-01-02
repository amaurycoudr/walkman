import {AUTH_TITLE_SIZE} from "./dimension";

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

export const p_text = {
    fontSize: 14,
    fontFamily: 'Lato_300Light'
}
export const title_text = {
    fontSize: 25,
    fontFamily: 'Lato_900Black'
}
export const big_title_text={
    fontSize: AUTH_TITLE_SIZE,
    fontFamily: 'Lato_900Black'
}