import React, {useReducer, createContext} from "react";

const reducer = (state,action) => {
    switch(action.type){
        case 'setMeanIdentification' :
            return {...state , meanIdentification : action.payload}
        case 'setIdentification' :
            return {...state, identification : action.payload}
        case 'setPseudo' :
            return {...state, pseudo : action.payload}
    }
};

const initialState = {
    meanIdentification : "phone",
    identification : "",
    pseudo : ""
};


export const AuthContext = createContext(initialState);

export const AuthProvider = ({children}) => {

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

    return(
        <AuthContext.Provider 
        value={{
            ...state,
            setMeanIdentification : setMeanIdentification(dispatch),
            setIdentification : setIdentification(dispatch),
            setPseudo : setPseudo(dispatch)}}>
            {children}
        </AuthContext.Provider>
        
    )

};
