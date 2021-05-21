import React from 'react'
import Metrics from '../../StylingConstants/Metrics'
import {StyleSheet} from 'react-native'
export default  {
    labelStyle: { 
        fontSize: Metrics.width * 0.05,
        fontWeight: '800' 
    },
    style: {
        backgroundColor: '#DE7070',
    },
    tabStyle: {
        justifyContent: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#000000'
    },
    
    activeTintColor: '#000000',
    inactiveTintColor: 'rgba(0,0,0,0.5)',
    
}
