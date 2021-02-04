import React from 'react'
import {
    CREATIVITY_ICON,
    DIFFICULT_ICON,
    EASY_ICON,
    IconNameType,
    MEDIUM_ICON,
    SPORT_ICON,
    STUDY_ICON,
    WELL_BEING_ICON,
    EDIT_ICON,
    DONE_ICON,
    DURATION_ICON
} from "./IconName";
import {View, ViewStyle} from "react-native";


const SportIcon = React.lazy((() => import('./SportIcon')))
const StudyIcon = React.lazy((() => import('./StudyIcon')))
const WellBeingIcon = React.lazy((() => import('./WellBeingIcon')))
const CreativityIcon = React.lazy((() => import('./CreativityIcon')))
const EasyIcon = React.lazy((() => import('./EasyIcon')))
const MediumIcon = React.lazy((() => import('./MediumIcon')))
const DifficultIcon = React.lazy((() => import('./DifficultIcon')))
const EditIcon = React.lazy((() => import('./EditIcon')))
const DoneIcon = React.lazy((() => import('./DoneIcon')))
const DurationIcon = React.lazy((() => import('./DurationIcon')))


interface Props {
    name: IconNameType,
    width: number,
    height: number,
    viewStyle?: ViewStyle,
    color: string

}

export default ({width, height, name, viewStyle, color = "white"}: Props) => (

    <View style={viewStyle}>
        <React.Suspense fallback={<></>}>
            {name === SPORT_ICON && <SportIcon color={color} width={width} height={height}/>}
            {name === CREATIVITY_ICON && <CreativityIcon color={color} width={width} height={height}/>}
            {name === WELL_BEING_ICON && <WellBeingIcon color={color} width={width} height={height}/>}
            {name === STUDY_ICON && <StudyIcon color={color} width={width} height={height}/>}
            {name === EASY_ICON && <EasyIcon color={color} width={width} height={height}/>}
            {name === MEDIUM_ICON && <MediumIcon color={color} width={width} height={height}/>}
            {name === DIFFICULT_ICON && <DifficultIcon color={color} width={width} height={height}/>}
            {name === EDIT_ICON && <EditIcon color={color} width={width} height={height}/>}
            {name === DONE_ICON && <DoneIcon color={color} width={width} height={height}/>}
            {name === DURATION_ICON && <DurationIcon color={color} width={width} height={height}/>}
        </React.Suspense>
    </View>
)