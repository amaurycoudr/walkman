import React, {useReducer, createContext} from "react";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';



const reducer = (state,action) => {
    switch(action.type){
        case 'setMeanIdentification' :
            return {...state , meanIdentification : action.payload}
        case 'setIdentification' :
            return {...state, identification : action.payload}
        case 'setPseudo' :
            return {...state, pseudo : action.payload}
        case 'setPasswordSent' : 
            return {...state, passwordSent : action.payload}
        case 'setPassword' :
            return {...state, password : action.payload}
    }
};

const initialState = {
    meanIdentification : "phone",
    identification : "",
    pseudo : "",
    passwordSent : false,
    password : ""
};

const baseUrl = require("../../backend_url.json")["url"]+"/api/users";


export const AuthContext = createContext(initialState);

export const AuthProvider = ({children}) => {

    const navigation = useNavigation();


    const [state,dispatch] = useReducer(reducer,initialState);

    const setMeanIdentification = (dispatch) => (mean) =>{
        dispatch({type : "setMeanIdentification", payload : mean})
    }

    const setIdentification = (dispatch) => (value) => {
        dispatch({type : "setIdentification", payload : value})
    }
    
    const setPseudo = (dispatch) => (value) => {
        dispatch({type : "setPseudo", payload : value})
    }

    const signUp = (dispatch) => (pseudo,mean,identification)  => {
        const url = baseUrl+"/signup/?type="+mean
        let data = {
            name : pseudo
        }
        if(mean==="email"){
            data = {...data, email : identification}
        }
        else{
            data = {...data, phone : identification}
        }
        axios.post(url,data)
        .then(response => {
            console.log(response.status)
            if(response.status===200){
                dispatch({type : "setPasswordSent", payload : true})
            }
        })
    };

    const signIn = (dispatch) => (identification,otp,mean) => {
        const url = baseUrl+"/signin/?type="+mean;
        let data = {
            otp : otp
        }
        mean === "email" ? data = {...data,email:identification} : data = {...data,phone:identification};
        axios.post(url,data)
        .then(response => {
            if(response.status===200){
                console.log(response.data.Token)
                navigation.navigate("TaskNavigation")
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
            signIn : signIn(dispatch),
            ...state
        }}
        >
            {children}
        </AuthContext.Provider>
        
    )

};


