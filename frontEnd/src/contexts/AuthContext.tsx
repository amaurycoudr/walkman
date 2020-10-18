import React, {useReducer, createContext, Reducer, Context} from "react";
import axios from "axios";
import {useNavigation} from '@react-navigation/native';

import usePseudo from "../hooks/usePseudo";


import {signUpValid, pseudoValid, setFormatPhone, signInValid} from "../helpers/authCheckers";

// Typescript
type StateType = {
    meanIdentification: string,
    identification: string,
    pseudo: string,
    pseudoErrorMessage: string,
    hasAccount: boolean,
    passwordSent: boolean,
    password: string,
    passwordAttempt: number,
};

type ContextType<T> = {
    [P in keyof T]: T[P];
} & {
    setMeanIdentification: (mean: string) => void,
    setIdentification: (identification: string) => void,
    setPassword: (password: string) => void,
    setPseudo: (value: string) => void,
    signUp: (pseudo: string, mean: string, identification: string) => void,
    signInAgain: (mean: string, identification: string) => void,
    toggleInUp: (hasAccount: boolean) => void,
    signIn: (identification: string, otp: string, mean: string, passwordAttempt: number) => void,
    reset: () => void,
}

type ActionType =
    | { type: 'setMeanIdentification'; payload: string }
    | { type: 'setIdentification'; payload: string }
    | { type: 'setPseudo'; payload: string }
    | { type: 'setPseudoError'; payload: string }
    | { type: 'setHasAccount'; payload: boolean }
    | { type: 'setPasswordSent'; payload: boolean }
    | { type: 'setPassword'; payload: string }
    | { type: 'setPasswordAttempt'; payload: number }
    | { type: 'reset'; payload: StateType };


const reducer: Reducer<StateType, ActionType> = (state, action) => {
    switch (action.type) {
        case 'setMeanIdentification' :
            return {...state, meanIdentification: action.payload}
        case 'setIdentification' :
            return {...state, identification: action.payload}
        case 'setPseudo' :
            return {...state, pseudo: action.payload,}
        case 'setPseudoError':
            return {...state, pseudoErrorMessage: action.payload}
        case 'setHasAccount':
            return {...state, hasAccount: action.payload}
        case 'setPasswordSent' :
            return {...state, passwordSent: action.payload}
        case 'setPassword' :
            return {...state, password: action.payload}
        case 'setPasswordAttempt' :
            return {...state, passwordAttempt: action.payload}
        case 'reset':
            return action.payload;
    }
};

const initialState: StateType = {
    meanIdentification: "phone",
    identification: "",
    pseudo: "",
    pseudoErrorMessage: "",
    hasAccount: false,
    passwordSent: false,
    password: "",
    passwordAttempt: 3

};
const init = () => {

    return initialState;
}

const baseUrl = require("../../backend_url.json")["url"] + "/api/users";


export const AuthContext = React.createContext<ContextType<StateType> | undefined>(undefined);

export const AuthProvider: React.FC = ({children}) => {


    const navigation = useNavigation();

    const pseudos = usePseudo();

    const [state, dispatch] = useReducer(reducer, initialState, init);


    const setMeanIdentification = (dispatch: React.Dispatch<ActionType>) => (mean: string) => {
        dispatch({type: "setMeanIdentification", payload: mean})
    }

    const setIdentification = (dispatch: React.Dispatch<ActionType>) => (value: string) => {
        dispatch({type: "setIdentification", payload: value})
    }

    const setPseudo = (dispatch: React.Dispatch<ActionType>) => (value: string) => {
        const error = !pseudoValid(value, pseudos);
        const message = error ? "Ce pseudo est déjà utilisé. Veuillez en choisir un autre" : "";
        dispatch({type: "setPseudoError", payload: message});
        dispatch({type: "setPseudo", payload: value});

    }

    const signUp = (dispatch: React.Dispatch<ActionType>) => (pseudo: string, mean: string, identification: string) => {
        if (mean === "phone") {
            identification = setFormatPhone(identification);
            dispatch({type: "setIdentification", payload: identification})
        }
        if (!signUpValid(identification, pseudo, pseudos)) {
            console.log("incorrect signup request")
            return
        }
        const url = baseUrl + "/signup/?type=" + mean
        let data = {
            [mean]: identification, //key equal its value as a variable
            name: pseudo
        }
        axios.post(url, data)
            .then(
                () => dispatch({type: "setPasswordSent", payload: true}), //succes
                (error) => { //failure
                    console.log("already registered")
                    dispatch({type: "setHasAccount", payload: true})
                })
    };

    const toggleInUp = (dispatch: React.Dispatch<ActionType>) => (hasAccount: boolean) => {
        dispatch({type: "setHasAccount", payload: hasAccount})
    };

    const signInAgain = (dispatch: React.Dispatch<ActionType>) => (mean: string, identification: string) => {
        if (mean === "phone") {
            identification = setFormatPhone(identification);
            dispatch({type: "setIdentification", payload: identification})
        }
        if (!signInValid(identification)) {
            return
        }
        const url = baseUrl + "/signin/?type=" + mean
        const params = {[mean]: identification};
        // To Do : addapt backend to axios requirements
        axios.get(url, {data: {params}})
            .then(response => {
                dispatch({type: "setPasswordSent", payload: true})
            })

    };

    const reset = (dispatch: React.Dispatch<ActionType>) => () => {
        dispatch({type: "reset", payload: init()})
        navigation.navigate("Auth");
    }

    const signIn = (dispatch: React.Dispatch<ActionType>) => (identification: string, otp: string, mean: string, passwordAttempt: number) => {
        const url = baseUrl + "/signin/?type=" + mean;
        let data = {
            [mean]: identification,
            otp: otp
        }
        axios.post(url, data)
            .then(response => {
                console.log(response.data.Token) // To Do : store this token in redux
                navigation.navigate("TaskNavigation")
            }, () => {
                passwordAttempt -= 1;
                if (passwordAttempt > 0) {
                    dispatch({type: "setPasswordAttempt", payload: passwordAttempt})
                } else {
                    dispatch({type: "reset", payload: init()})
                    navigation.navigate("Auth");
                }
            })
    };

    const setPassword = (dispatch: React.Dispatch<ActionType>) => (value: string) => {
        dispatch({type: "setPassword", payload: value})
    }


    return (
        <AuthContext.Provider
            value={{
                ...state,
                setMeanIdentification: setMeanIdentification(dispatch),
                setIdentification: setIdentification(dispatch),
                setPassword: setPassword(dispatch),
                setPseudo: setPseudo(dispatch),
                signUp: signUp(dispatch),
                signInAgain: signInAgain(dispatch),
                toggleInUp: toggleInUp(dispatch),
                signIn: signIn(dispatch),
                reset: reset(dispatch),
            }}
        >
            {children}
        </AuthContext.Provider>

    )

};


