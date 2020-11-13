import React, {useState, useEffect} from 'react'
import axios from "axios";
import {BASE_URL} from "../../../helpers/api";


export default function usePseudo() {
    const [pseudo, setPseudo] = useState([]);

    useEffect(() => {
        const url = BASE_URL + "users/signup/";
        axios.get(url)
            .then(result => {
                setPseudo(result.data)
            })
    }, []);

    return pseudo;
}
