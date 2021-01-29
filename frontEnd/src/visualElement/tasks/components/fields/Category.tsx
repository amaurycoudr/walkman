import React, {FC} from 'react'
import {View} from 'react-native'

import Creativity from "../../../../features/tasks/const/creativity.svg";
import Sport from "../../../../features/tasks/const/sport.svg";
import WellBeing from "../../../../features/tasks/const/wellBeing.svg";
import Study from "../../../../features/tasks/const/study.svg"

import {category} from "../../../../features/tasks/tasksType";
import {
    CATEGORY_ID_CREATIVITY,
    CATEGORY_ID_SPORT,
    CATEGORY_ID_STUDY,
    CATEGORY_ID_WELL_BEING
} from "../../../../features/tasks/tasksConst";

interface Props {
    cate: category
}

const Category: FC<Props> = ({cate}) => {

    return (
        <View style={{backgroundColor: cate.color}}>
            {
                cate.id === CATEGORY_ID_CREATIVITY ?
                    <Creativity width={80} height={80}/>
                    : cate.id === CATEGORY_ID_WELL_BEING ?
                    <WellBeing width={80} height={80}/>
                    : cate.id === CATEGORY_ID_STUDY ?
                        <Study width={80} height={80}/> :
                        cate.id === CATEGORY_ID_SPORT &&
                        <Sport width={80} height={80}/>
            }


        </View>
    )
}

export default Category
