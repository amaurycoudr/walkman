import React, {FC} from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'

interface Styles {
    container : ViewStyle
}


const RowSpacer:FC<{nbSpace:number}> = ({nbSpace}) => {

    const styles = StyleSheet.create<Styles>({
        container : {
            height : nbSpace,
        }
    })
    return (
        <View style={styles.container}>
        </View>
    )
    
}

const ColumnSpacer:FC<{nbSpace:number}> = ({nbSpace}) => {
    const styles = StyleSheet.create<Styles>({
        container : {
            width : nbSpace,
        }
    })
    return (
        <View style={styles.container}>
        </View>
    )
}

export const Spacer = {
    Row : RowSpacer,
    Column : ColumnSpacer
}