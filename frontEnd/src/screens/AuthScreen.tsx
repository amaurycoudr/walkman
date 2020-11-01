import React, {useState,useContext} from "react";

// components
import AuthContainer from "../visualElement/container/AuthContainer";

//context
import {AuthProvider} from "../logicalElement/contexts/AuthContext";


const AuthScreen = () => {
    return(
        <AuthProvider>
            <AuthContainer />
        </AuthProvider>
    );

};

export default AuthScreen;