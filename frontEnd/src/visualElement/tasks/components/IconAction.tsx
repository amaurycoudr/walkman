import React, {FC} from 'react'
import {TouchableOpacity, ViewStyle} from 'react-native'


import Icon from "../../components/icon/Icon";
import {IconNameType} from "../../components/icon/IconName";

interface Props {
    name: IconNameType,
    width: number,
    height: number,
    color: string,
    handlePress: Function,
    disabled?: boolean,
    style?: ViewStyle
}

const IconAction: FC<Props> = ({name, width, height, style, handlePress, disabled,color}) => {
    return (
        <>
            <TouchableOpacity
                onPress={() => handlePress()}
                disabled={disabled}
            >
                <Icon
                    name={name}
                    width={width}
                    height={height}
                    viewStyle={style}
                    color={color}
                />
            </TouchableOpacity>
        </>


    )
};

export default IconAction;
