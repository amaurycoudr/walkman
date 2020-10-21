export const pseudoValid  = (pseudo :string ,pseudos : string[]) : boolean => {
    return !pseudos.includes(pseudo) && pseudo.length > 0
};

export const mailCorrect = (mail : string) : boolean => {
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
        return true
    }
    else{
        console.log("mail invalid")
        return false
    }
};

export const phoneCorrect = (phone : string) : boolean => {
        var re = /^336|7[1-9]{8}$/;
        return re.test(phone);
}

export const setFormatPhone = (phone : string) : string => {
    const re = /^0/;
    if(re.test(phone)){
        return phone.replace(re,"33")
    }
    return phone
};

export const signUpValid = (identification : string,pseudo : string,pseudos : string[]) : boolean => {
    return ((phoneCorrect(identification) || mailCorrect(identification)) && pseudoValid(pseudo,pseudos))
}

export const signInValid = (identification : string) : boolean => {
    return phoneCorrect(identification) || mailCorrect(identification)
}