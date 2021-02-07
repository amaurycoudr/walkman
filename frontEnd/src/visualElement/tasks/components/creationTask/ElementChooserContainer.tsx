import React, {FC} from "react";
import {Text} from "react-native";

interface Props {
    title: String,
    indication: String,

}

const ElementChooserContainer: FC<Props> = ({title, indication, children}) => (
    <>
        <Text>{title}</Text>
        <Text>{indication}</Text>
        {children}
    </>
)
export default ElementChooserContainer