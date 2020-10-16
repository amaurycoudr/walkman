export const pseudoValid = (pseudo,pseudos) => {
    return !pseudos.includes(pseudo)
};

export const mailCorrect = (mail) => {
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
        return true
    }
    else{
        console.log("mail invalid")
        return false
    }
};

export const phoneCorrect = (phone) => {
        var re = /^336|7[1-9]{8}$/;
        return re.test(phone);
}

export const setFormatPhone = (phone) => {
    const re = /^0/;
    if(re.test(phone)){
        return phone.replace(re,"33")
    }
    return phone
};

export const signUpValid = (identification,pseudo,pseudos) => {
    return ((phoneCorrect(identification) || mailCorrect(identification)) && pseudoValid(pseudo,pseudos))
}

export const signInValid = (identification) => {
    return phoneCorrect(identification) || mailCorrect(identification)
}