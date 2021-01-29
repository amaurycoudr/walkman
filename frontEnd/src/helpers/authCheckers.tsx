import {LongPressGestureHandler} from "react-native-gesture-handler";
import isEmail from 'validator/lib/isEmail';

export const pseudoValid = (pseudo: string, pseudos: string[]): boolean => {
    return !pseudos.includes(pseudo) && pseudo.length > 0
};

export const mailCorrect = (mail: string): boolean => {
    return isEmail(mail);
};


export const phoneCorrect = (phone: string): boolean => {

    const phoneTest = phone.replace(/\s/g, '');
    const re = /^(6|7)[0-9]{8}/;
    return re.test(phoneTest);
}
// set the format of the phone to be user frendly
export const setFormatPhone = (prevPhone: string, phone: string): string => {

    if ((phone.length > prevPhone.length)) {
        if (phone.length === 1) {
            return ' ' + phone+' '
        }
        if ([2, 5, 8, 11].includes(phone.length)) {
            return phone + ' '
        } else {
            const t = [3, 6, 9, 12]
            if (t.includes(phone.length)) {
                if (phone[phone.length - 1] !== ' ') {
                    const intermediate = phone.slice(0, phone.length - 1)
                    return intermediate + ' ' + phone[phone.length - 1]
                }
            }
        }
    }
    if((prevPhone.length>phone.length)&&(prevPhone[prevPhone.length-1]===' ')){
        return phone.slice(0, phone.length - 1)
    }
    return phone

};
// set the format of the phone before the api call
export const setAPIFormatPhone=(phone:string):string=>{

    return "33"+phone.replace(/\s/g, '');

}
export const signUpValid = (identification: string, pseudo: string, pseudos: string[]): boolean => {
    return ((phoneCorrect(identification) || mailCorrect(identification)) && pseudoValid(pseudo, pseudos))
}

export const signInValid = (identification: string): boolean => {
    return phoneCorrect(identification) || mailCorrect(identification)
}