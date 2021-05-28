import React from 'react'
import {StyleSheet} from 'react-native'
import Metrics from '../../../StylingConstants/Metrics'

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1
    },
    iconWhenClicked:{
        paddingLeft: Metrics.width * 0.08,
        width: Metrics.width * 0.2
    },
    iconWhenNotClicked:{
        paddingLeft: Metrics.width * 0.08,
        width: Metrics.width * 0.2
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent: 'flex-end',
        paddingLeft: Metrics.width * 0.01,
    },
    headerTitlesContainer: {
        flexDirection: 'row',
        width: Metrics.width * 0.76,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowContainer:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    caseContainer:{
        maxWidth: Metrics.width * 0.4,
        alignSelf: 'center'
    },
    rowValuesContainer:{
        width: Metrics.width * 0.7,
    },
    rowValuesInnerContainer:{
        //
        flexDirection:'row',
        justifyContent:'space-between',
        flex: 1
    },
    rowItem:{
        paddingVertical: Metrics.height * 0.02,
        alignSelf: 'center'
    }
})

export default styles