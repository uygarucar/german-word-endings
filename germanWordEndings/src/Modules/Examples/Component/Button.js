import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { SampleSentences } from '../SampleSentencesData'

import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {isGermanSelector} from '../../../Redux/LanguageRedux'
import {setIsGermanAC} from '../../../Redux/LanguageRedux'
import styles from '../Styles/ExamplesScreenStyle'

import {TextColorAnimation} from './TextColorAnimation'
import { yellowTextSelector } from '../../../Redux/YellowTextRedux'

const Button = (props) => {
    const dispatch= useDispatch();
    const isGerman = useSelector(isGermanSelector);

    const animatedYellow= useSelector(yellowTextSelector)

    yellowStyle={
        color: animatedYellow
    }

    const _FlipCard = () => {
        if (!isGerman) {
            dispatch(setIsGermanAC(true))
        }
        else {
            dispatch(setIsGermanAC(false))
        }
    }



    return (
        <>
            <TextColorAnimation
            />
            <SampleSentences onPress_FlipCard={_FlipCard} 
            yellowStyle={yellowStyle}
            isGerman={isGerman}
            styleButton= {styles.button} 
            styleClickMessage={styles.clickMessageFontSize}  
            styleSamplesFontSize={styles.sampleSentencesFontSize}
            caseType={props.caseType}
            nounGenderType={props.nounGenderType}
            hasAdjective={props.hasAdjective}
            articleType={props.articleType}
            />
        </>
    )

    }
export default Button