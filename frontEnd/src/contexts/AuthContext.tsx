import React, {useReducer, createContext} from "react";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

import usePseudo from "../hooks/usePseudo";


import {signUpValid,pseudoValid,setFormatPhone,signInValid} from "../helpers/authCheckers";



const reducer = (state,action) => {
    switch(action.type){
        case 'setMeanIdentification' :
            return {...state , meanIdentification : action.payload}
        case 'setIdentification' :
            return {...state, identification : action.payload}
        case 'setPseudo' :
            return {...state, pseudo : action.payload}
        case 'setPseudoError':
            return {...state, pseudoError : action.payload}
        case 'setPseudoErrorMessage':
            return {...state, pseudoErrorMessage : action.payload}
        case 'setPasswordSent' : 
            return {...state, passwordSent : action.payload}
        case 'setPassword' :
            return {...state, password : action.payload}
        case 'setPasswordAttempt' :
            return {...state, passwordAttempt : action.payload}
        case 'reset':
            return action.payload;
    }
};

const init = () => {
    const initialState = {
        meanIdentification : "phone",
        identification : "",
        pseudo : "",
        pseudoError : false,
        pseudoErrorMessage : "",
        passwordSent : false,
        password : "",
        passwordAttempt : 3
        
    };
    return initialState;
}

const baseUrl = require("../../backend_url.json")["url"]+"/api/users";


export const AuthContext = createContext(init());

export const AuthProvider = ({children}) => {


    const navigation = useNavigation();

    const pseudos = usePseudo();

    const [state,dispatch] = useReducer(reducer,init());



    const setMeanIdentification = (dispatch) => (mean) =>{
        dispatch({type : "setMeanIdentification", payload : mean})
    }

    const setIdentification = (dispatch) => (value) => {   
        dispatch({type : "setIdentification", payload : value})
    }
    
    const setPseudo = (dispatch) => (value) => {
        const error = !pseudoValid(value,pseudos);
        const message = error ? "Ce pseudo est déjà utilisé. Veuillez en choisir un autre" : "";
        dispatch({type : "setPseudoError",payload : error});
        dispatch({type : "setPseudoErrorMessage",payload : message});
        dispatch({type : "setPseudo",payload : value});
        
    }

    const signUp = (dispatch) => (pseudo,mean,identification)  => {
        if(mean === "phone"){
            identification = setFormatPhone(identification);
            dispatch({type : "setIdentification",payload : identification})
        } 
        if(!signUpValid(identification,pseudo,pseudos)){
            console.log("incorrect signup request")
            return
        }
        const url = baseUrl+"/signup/?type="+mean
        let data = {
            [mean] : identification, //key equal its value as a variable
            name : pseudo
        }
        axios.post(url,data)
        .then(() => dispatch({type : "setPasswordSent", payload : true}),error => console.log(error))
    };

    const signInAgain = (dispatch) => (mean,identification) => {
        if(mean === "phone"){
            identification = setFormatPhone(identification);
            dispatch({type : "setIdentification",payload : identification})
        }
        if(!signInValid(identification)){
            return
        }
        const url = baseUrl+"/signin/?type="+mean
        const params = {[mean] : identification};
        // To Do : addapt backend to axios requirements
        axios.get(url,{ data: {params} })
        .then(response => {
            dispatch({type : "setPasswordSent", payload : true})
        })

    };

    const reset = (dispatch) => () => {
        dispatch({type:"reset",payload:init()})
        navigation.navigate("Auth");
    }

    const signIn = (dispatch) => (identification,otp,mean,passwordAttempt) => {
        const url = baseUrl+"/signin/?type="+mean;
        let data = {
            [mean] : identification,
            otp : otp
        }
        axios.post(url,data)
        .then(response => {
                console.log(response.data.Token) // To Do : store this token in redux
                navigation.navigate("TaskNavigation")
        },() => {
            passwordAttempt-=1;
            if(passwordAttempt>0){
                dispatch({type:"setPasswordAttempt",payload:passwordAttempt})
            }
            else{
                dispatch({type:"reset",payload:init()})
                navigation.navigate("Auth");
            }
        })
    };

    const setPassword = (dispatch) => (value) => {
        dispatch({type : "setPassword", payload : value})
    }

    


    return(
        <AuthContext.Provider 
        value={{
            setMeanIdentification : setMeanIdentification(dispatch),
            setIdentification : setIdentification(dispatch),
            setPassword : setPassword(dispatch),
            setPseudo : setPseudo(dispatch),
            signUp : signUp(dispatch),
            signInAgain : signInAgain(dispatch),
            signIn : signIn(dispatch),
            reset : reset(dispatch),
            ...state
        }}
        >
            {children}
        </AuthContext.Provider>
        
    )

};


