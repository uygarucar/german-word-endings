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
    }
})

export default styles