import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";


const FakeApi = () => {

    const [content, setContent] = useState("");


    useEffect(() => {
        const data = require("../../backend_url.json");
        fetch(data["url"] + '/test/test')
            .then(response => response.json())
            .then(json => {
                setContent(json)
            })
    }, []);



    return (
        <View>
        <Text>Fake Call to Api </Text>
            <Text > Coucou : { content } </Text>
        </View>
    );
}

export default FakeApi; 