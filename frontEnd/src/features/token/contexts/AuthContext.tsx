import React, {createContext, Reducer, useEffect, useReducer, useState} from "react";
import axios from "axios";
import {useNavigation} from '@react-navigation/native';

import {setToken} from "../redux/tokenSlice";
import {
    mailCorrect,
    phoneCorrect,
    pseudoValid,
    setAPIFormatPhone,
    setFormatPhone,
    signInValid,
} from "../../../helpers/authCheckers";
import {useDispatch} from "react-redux";

import {BASE_URL} from "../../../helpers/api";
import {
    GET_CODE_CONTAINER,
    MEAN_MAIL,
    MEAN_PHONE,
    SIGN_IN_CONTAINER,
    SIGN_UP_CONTAINER
} from "../../../helpers/consts/AuthConst";
import {userIsConnected} from "../../../helpers/netInfo";
import {useTranslation} from "react-i18next";

// Typescript
export type Container = typeof SIGN_IN_CONTAINER | typeof SIGN_UP_CONTAINER | typeof GET_CODE_CONTAINER
export type Mean = typeof MEAN_PHONE | typeof MEAN_MAIL
type StateType = {
    mean: Mean,
    identification: string,
    pseudo: string,
    pseudoIsValid: boolean,
    identificationIsValid: boolean,
    errorMessage: string,
    code: string,

    container: Container,
    loading: boolean,
    netConnexion: boolean,
};


type ContextType<T> = {
    [P in keyof T]: T[P];
} & {
    changeMean: (mean: Mean) => void,
    identificationChange: (identification: string) => void,
    codeChange: (password: string) => void,
    pseudoChange: (value: string) => void,
    signUp: (pseudo: string, mean: string, identification: string) => void,
    getCode: (mean: string, identification: string) => void,
    signIn: (identification: string, otp: string, mean: string) => void,
    reset: () => void,
    authNavigation: (container: Container) => void,
}

type ActionType =
    | { type: 'setMean'; payload: Mean }
    | { type: 'setIdentification'; payload: string }
    | { type: 'setPseudo'; payload: string }
    | { type: 'setPseudoIsValid'; payload: boolean }
    | { type: 'setCode'; payload: string }
    | { type: 'setPasswordAttempt'; payload: number }
    | { type: 'reset'; payload: StateType }
    | { type: 'setErrorMessage'; payload: { errorMessage: string, netConnexion?: boolean } }
    | { type: 'setLoading'; payload: boolean }
    | { type: 'setContainer'; payload: Container };


const initialState: StateType = {
    mean: MEAN_PHONE,
    identification: "",
    pseudo: "",
    pseudoIsValid: false,
    identificationIsValid: false,
    errorMessage: "",
    code: "",
    container: SIGN_UP_CONTAINER,
    loading: false,
    netConnexion: true

};

const reducer: Reducer<StateType, ActionType> = (state, action) => {
    switch (action.type) {
        case 'setMean' :
            return {...state, mean: action.payload, identification: ""}
        case 'setIdentification' :
            return {
                ...state,
                identification: state.mean === MEAN_MAIL ? action.payload : setFormatPhone(state.identification, action.payload),
                identificationIsValid: state.mean === MEAN_MAIL ? mailCorrect(action.payload) : phoneCorrect(setFormatPhone(state.identification, action.payload))
            }
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
            return {...state, container: action.payload, errorMessage: ""}
        case 'setErrorMessage':
            return action.payload.netConnexion !== undefined ? {
                ...state,
                errorMessage: action.payload.errorMessage,
                netConnexion: action.payload.netConnexion
            } : {
                ...state,
                errorMessage: action.payload.errorMessage,
                netConnexion: true
            }
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

    const {t} = useTranslation()
    const dispatchRedux = useDispatch()

    const [pseudos, setPseudo] = useState([]);

    const [state, dispatch] = useReducer(reducer, initialState, init);


    const changeMean = (dispatch: React.Dispatch<ActionType>) => (mean: Mean) => {
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

    const codeChange = (dispatch: React.Dispatch<ActionType>) => (value: string) => {
        dispatch({type: "setCode", payload: value})
    }

    const reset = (dispatch: React.Dispatch<ActionType>) => () => {
        dispatch({type: "reset", payload: init()})
        navigation.navigate("Auth");
    }

    const checkConnexion = () => {
        userIsConnected().then(value => {
                dispatch({
                    type: "setErrorMessage",
                    payload: {
                        errorMessage: "",
                        netConnexion: Boolean(value),
                    }
                })
            }
        )
    }
    const checkError = (error: any) => {
        return error && error.response && error.response.data && error.response.data.error
    }
    const handleErrorCode = (code: string, time = 0) => {
        switch (code) {
            case "1":
                dispatch({
                    type: "setErrorMessage",
                    payload: {errorMessage: t('authScreen:errorMessageBadCode')}

                })

                break;
            case "2":
                dispatch({
                    type: "setErrorMessage",
                    payload: {errorMessage: t('authScreen:errorMessageAlreadyUse')}

                })
                break;
            case "3":
                dispatch({
                    type: "setErrorMessage",
                    payload: {errorMessage: t('authScreen:errorMessageNotSignUp')}
                })
                break;
            case "4":
                const message = t('authScreen:errorMessageTime', {time: new Date(time * 1000).toISOString().substr(11, 8)})
                dispatch({type: "setErrorMessage", payload: {errorMessage: message}})
                break;
            default:
                checkConnexion()
        }
    }


    const signUp = (dispatch: React.Dispatch<ActionType>) => (pseudo: string, mean: string, identification: string) => {

        const url = user_url + "/signup/?type=" + mean

        let data = {
            [mean]: mean === MEAN_PHONE ? setAPIFormatPhone(identification) : identification,
            name: pseudo
        }
        dispatch({type: "setLoading", payload: true})
        axios.post(url, data)
            .then(
                (result) => {
                    dispatch({type: "setLoading", payload: false})
                    dispatch({type: "setContainer", payload: SIGN_IN_CONTAINER})
                }, (error) => {
                    dispatch({type: "setLoading", payload: false})
                    if (checkError(error)) {
                        handleErrorCode(error.response.data.error)
                    } else {
                        checkConnexion()
                    }
                })
    }


    const getCode = (dispatch: React.Dispatch<ActionType>) => (mean: string, identification: string) => {
        const url = user_url + "/getcode/?type=" + mean
        dispatch({type: "setLoading", payload: true})
        axios.post(url, {
            [mean]: mean === MEAN_PHONE ? setAPIFormatPhone(identification) : identification,
        })
            .then(
                (result) => {
                    dispatch({type: "setLoading", payload: false})
                    dispatch({type: "setContainer", payload: SIGN_IN_CONTAINER})
                },
                (error) => {
                    dispatch({type: "setLoading", payload: false})
                    if (checkError(error)) {
                        handleErrorCode(error.response.data.error, error.response.data.time)
                    } else {
                        checkConnexion()
                    }
                }
            )

    };

    const signIn = (dispatch: React.Dispatch<ActionType>) => (identification: string, otp: string, mean: string) => {
        const url = user_url + "/signin/?type=" + mean;
        let data = {
            [mean]: mean === MEAN_PHONE ? setAPIFormatPhone(identification) : identification,
            otp: otp
        }
        dispatch({type: "setLoading", payload: true})
        axios.post(url, data)
            .then(response => {

                dispatch({type: "setLoading", payload: false})
                dispatch({type: "reset", payload: init()})
                dispatchRedux(setToken(response.data.Token))

            }, (error) => {
                dispatch({type: "setLoading", payload: false})
                if (checkError(error)) {
                    handleErrorCode(error.response.data.error)
                } else {
                    checkConnexion()
                }
            })
    };

    const authNavigation = (dispatch: React.Dispatch<ActionType>) => (container: Container) => {
        dispatch({type: "setContainer", payload: container})
    }

    useEffect(() => {
        const url = BASE_URL + "users/signup/";
        axios.get(url)
            .then(result => {

                setPseudo(result.data)
            }).catch(reason => {
            checkConnexion()
        })
    }, []);

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
                authNavigation: authNavigation(dispatch),
            }}
        >
            {children}
        </AuthContext.Provider>

    )

};


