import React, {FC} from 'react'
import {TouchableOpacity, ViewStyle} from 'react-native'


import Icon from "../../components/icon/Icon";
import {IconNameType} from "../../components/icon/IconName";

interface Props {
    iconName: IconNameType,
    width: number,
    height: number,
    color: string,
    handlePress: Function,
    disabled?: boolean,
    style: ViewStyle
}

const IconAction: FC<Props> = ({iconName, width, height, style, handlePress, disabled}) => {
    return (
        <>
            <TouchableOpacity
                onPress={() => handlePress()}
                disabled={disabled}
            >
                <Icon
                    name={iconName}
                    width={width}
                    height={height}
                    viewStyle={style}
                />
            </TouchableOpacity>
        </>


    )
};

export default IconAction;
