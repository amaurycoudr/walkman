import React, {useReducer, createContext, Reducer} from "react";
import axios from "axios";
import {useNavigation} from '@react-navigation/native';

import usePseudo from "../hooks/usePseudo";

import {setToken,initTokenState} from "../redux/tokenSlice";
import {initTaskState} from "../../tasks/redux/tasksSlice";


import {signUpValid, pseudoValid, setFormatPhone, signInValid} from "../../../helpers/authCheckers";
import {useDispatch} from "react-redux";
import {BASE_URL} from "../../../helpers/api";

// Typescript
type StateType = {
    mean: "phone" | "email",
    identification: string,
    pseudo: string,
    pseudoIsValid: boolean,
    identificationIsValid: boolean,
    errorMessage: string,
    code: string,
    passwordAttempt: number,
    container: "SignUpContainer" | "SignInContainer" | "GetCodeContainer",
    loading: boolean,
};


type ContextType<T> = {
    [P in keyof T]: T[P];
} & {
    changeMean: (mean: "phone" | "email") => void,
    identificationChange: (identification: string) => void,
    codeChange: (password: string) => void,
    pseudoChange: (value: string) => void,
    signUp: (pseudo: string, mean: string, identification: string) => void,
    getCode: (mean: string, identification: string) => void,
    signIn: (identification: string, otp: string, mean: string, passwordAttempt: number) => void,
    reset: () => void,
    errorMessageChange: (errorMessage: string) => void,
    authNavigation: (container: "SignUpContainer" | "SignInContainer" | "GetCodeContainer") => void,
}

type ActionType =
    | { type: 'setMean'; payload: "phone" | "email" }
    | { type: 'setIdentification'; payload: string }
    | { type: 'setPseudo'; payload: string }
    | { type: 'setPseudoIsValid'; payload: boolean }
    | { type: 'setCode'; payload: string }
    | { type: 'setPasswordAttempt'; payload: number }
    | { type: 'reset'; payload: StateType }
    | { type: 'setErrorMessage'; payload: string }
    | { type: 'setLoading'; payload: boolean }
    | { type: 'setContainer'; payload: "SignUpContainer" | "SignInContainer" | "GetCodeContainer" };


const initialState: StateType = {
    mean: "phone",
    identification: "",
    pseudo: "",
    pseudoIsValid: true,
    identificationIsValid: true,
    errorMessage: "",
    code: "",
    passwordAttempt: 3,
    container: "SignUpContainer",
    loading: false

};

const reducer: Reducer<StateType, ActionType> = (state, action) => {
    switch (action.type) {
        case 'setMean' :
            return {...state, mean: action.payload}
        case 'setIdentification' :
            return {...state, identification: action.payload}
        case 'setPseudo' :
            return {...state, pseudo: action.payload,}
        case 'setPseudoIsValid':
            return {...state, pseudoIsValid: action.payload}
        case 'setCode' :
            return {...state, code: action.payload}
        case 'setPasswordAttempt' :
            return {...state, passwordAttempt: action.payload}
        case 'reset':
            return action.payload;
        case 'setContainer':
            return {...state, container: action.payload}
        case 'setErrorMessage':
            return {...state, errorMessage: action.payload}
        case 'setLoading':
            return {...state, loading: action.payload}
    }
};

const init = () => {

    return initialState;
}

const user_url = BASE_URL + 'users'


export const AuthContext = createContext<ContextType<StateType> | undefined>(undefined);


export const AuthProvider: React.FC = ({children}) => {

    const navigation = useNavigation();

    const pseudos = usePseudo();

    const dispatchRedux = useDispatch()

    const [state, dispatch] = useReducer(reducer, initialState, init);


    const changeMean = (dispatch: React.Dispatch<ActionType>) => (mean: "phone" | "email") => {
        dispatch({type: "setMean", payload: mean})
    }

    const identificationChange = (dispatch: React.Dispatch<ActionType>) => (value: string) => {
        dispatch({type: "setIdentification", payload: value})
    }

    const pseudoChange = (dispatch: React.Dispatch<ActionType>) => (value: string) => {
        const error = !pseudoValid(value, pseudos);
        dispatch({type: "setPseudoIsValid", payload: !error});
        dispatch({type: "setPseudo", payload: value});

    }
    const errorMessageChange = (dispatch: React.Dispatch<ActionType>) => (errorMessage: string) => {
        dispatch({type: "setErrorMessage", payload: errorMessage});
    }

    const codeChange = (dispatch: React.Dispatch<ActionType>) => (value: string) => {
        dispatch({type: "setCode", payload: value})
    }

    const reset = (dispatch: React.Dispatch<ActionType>) => () => {
        dispatch({type: "reset", payload: init()})
        navigation.navigate("Auth");
    }


    const signUp = (dispatch: React.Dispatch<ActionType>) => (pseudo: string, mean: string, identification: string) => {
        if (mean === "phone") {
            identification = setFormatPhone(identification);
            dispatch({type: "setIdentification", payload: identification})
        }
        if (!signUpValid(identification, pseudo, pseudos)) {
            dispatch({type: "setErrorMessage", payload: "Veuillez rentrer un pseudo et/ou un identifiant correct"})
            return
        }
        const url = user_url + "/signup/?type=" + mean
        let data = {
            [mean]: identification,
            name: pseudo
        }

        dispatch({type: "setLoading", payload: true})
        axios.post(url, data)
            .then(
                (result) => {
                    dispatch({type: "setLoading", payload: false})
                    dispatch({type: "setContainer", payload: "SignInContainer"})
                    dispatch({type: "setErrorMessage", payload: ""})
                },
                (error) => {
                    dispatch({type: "setLoading", payload: false})
                    switch (error.response.data.error) {
                        case "2":
                            dispatch({
                                type: "setErrorMessage",
                                payload: "Il semblerait que votre compte existe déjà. Essayez de vous connecter"
                            })
                            return
                    }
                })
    };


    const getCode = (dispatch: React.Dispatch<ActionType>) => (mean: string, identification: string) => {
        if (mean === "phone") {
            identification = setFormatPhone(identification);
            dispatch({type: "setIdentification", payload: identification})
        }
        if (!signInValid(identification)) {
            dispatch({type: "setErrorMessage", payload: "Il semblerait que vous ayez déjà reçu un code de connexion."})
            return
        }
        const url = user_url + "/getcode/?type=" + mean

        dispatch({type: "setLoading", payload: true})
        axios.post(url, {
            [mean]: identification
        })
            .then(
                (result) => {
                    dispatch({type: "setLoading", payload: false})
                    dispatch({type: "setErrorMessage", payload: ""})
                    dispatch({type: "setContainer", payload: "SignInContainer"})
                },
                (error) => {
                    dispatch({type: "setLoading", payload: false})
                    switch (error.response.data.error) {
                        case "3":
                            dispatch({type: "setErrorMessage", payload: "Vous n'êtes pas encore inscrit."})
                            return
                        case "4":
                            const message = `vous pourrez recevoir un code dans ${error.response.data.time}s`
                            dispatch({type: "setErrorMessage", payload: message})
                            return
                    }
                }
            )

    };

    const signIn = (dispatch: React.Dispatch<ActionType>) => (identification: string, otp: string, mean: string, passwordAttempt: number) => {
        const url = user_url + "/signin/?type=" + mean;
        if (mean === "phone") {
            identification = setFormatPhone(identification);
            dispatch({type: "setIdentification", payload: identification})
        }
        if (!signInValid(identification)) {
            dispatch({type: "setErrorMessage", payload: "Il semblerait que vous ayez déjà reçu un code de connexion."})
            return
        }
        let data = {
            [mean]: identification,
            otp: parseInt(otp)
        }
        dispatch({type: "setLoading", payload: true})
        axios.post(url, data)
            .then(response => {
                dispatch({type: "setLoading", payload: false})
                dispatch({type: "reset", payload: init()})
                dispatch({type: "setErrorMessage", payload: ""})
                dispatchRedux(setToken(response.data.Token))

            }, (error) => {
                dispatch({type: "setLoading", payload: false})
                switch (error.response.data.error) {
                    case "1": //wrong code

                        dispatch({
                            type: "setErrorMessage",
                            payload: "Vous vous êtes trompé de code. Veuillez réessayer."
                        })
                        passwordAttempt -= 1;
                        if (passwordAttempt > 0) {
                            dispatch({type: "setPasswordAttempt", payload: passwordAttempt})
                        } else {
                            dispatch({type: "reset", payload: init()})
                            navigation.navigate("Auth");
                        }
                        break;
                }
            })
    };

    const authNavigation = (dispatch: React.Dispatch<ActionType>) => (container: "SignUpContainer" | "SignInContainer" | "GetCodeContainer") => {
        dispatch({type: "setErrorMessage", payload: ""})
        dispatch({type: "setContainer", payload: container})
    }


    return (
        <AuthContext.Provider
            value={{
                ...state,
                changeMean: changeMean(dispatch),
                identificationChange: identificationChange(dispatch),
                codeChange: codeChange(dispatch),
                pseudoChange: pseudoChange(dispatch),
                signUp: signUp(dispatch),
                getCode: getCode(dispatch),
                signIn: signIn(dispatch),
                reset: reset(dispatch),
                errorMessageChange: errorMessageChange(dispatch),
                authNavigation: authNavigation(dispatch),
            }}
        >
            {children}
        </AuthContext.Provider>

    )

};


