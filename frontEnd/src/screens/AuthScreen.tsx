import React, {useState,useContext} from "react";

// components
import AuthContainer from "../container/AuthContainer";

//context
import {AuthProvider} from "../contexts/AuthContext";


const AuthScreen = () => {
    return(
        <AuthProvider>
            <AuthContainer />
        </AuthProvider>
    );

};

export default AuthScreen;