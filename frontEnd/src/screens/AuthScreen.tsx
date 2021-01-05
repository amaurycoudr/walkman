import React from "react";


// components
import AuthContainer from "../visualElement/auth/container/AuthContainer";

//context
import {AuthProvider} from "../features/token/contexts/AuthContext";
import {Colors} from "../styles";


const AuthScreen = () => {
    return(
        <AuthProvider>
            <AuthContainer />
        </AuthProvider>
    );

};

export default AuthScreen;