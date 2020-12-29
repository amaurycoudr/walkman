import {Dimensions} from "react-native";
export const SCREEN_WIDTH =Dimensions.get("screen").width ;
export const SWITCHER_WIDTH = 320 * Dimensions.get("screen").width / 375;
export const AUTH_WIDTH = 347 * Dimensions.get("screen").width / 375;
console.log(SWITCHER_WIDTH)
console.log(AUTH_WIDTH)
console.log(Dimensions.get("screen"))

console.log(Dimensions.get("window"))
export const switcher_size = {
    height: 70,
    width: SWITCHER_WIDTH
}
export const switcher_button_size = {
    width: SWITCHER_WIDTH / 2
}
export const auth_container_size={
    width:AUTH_WIDTH,

}