import React, {useState,useEffect} from 'react'
import axios from "axios";


const baseUrl = require("../../backend_url.json")["url"]+"/api/users";

export default function usePseudo() {
    const [pseudo,setPseudo] = useState([]);

    useEffect(() => {
        const url = baseUrl+"/signup";
        axios.get(url)
        .then(result => {setPseudo(result.data)})
    },[]);

    return pseudo;
}
