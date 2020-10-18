import React, {useState,useContext} from "react";

// components
import AuthContainer from "../components/authScreen/AuthContainer";

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