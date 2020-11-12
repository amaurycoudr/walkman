import React, {useState,useContext} from "react";

// components
import AuthContainer from "../visualElement/auth/container/AuthContainer";

//context
import {AuthProvider} from "../features/token/contexts/AuthContext";


const AuthScreen = () => {
    return(
        <AuthProvider>
            <AuthContainer />
        </AuthProvider>
    );

};

export default AuthScreen;