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
import { pinkTextSelector } from '../../../Redux/PinkTextRedux'
import { greenTextSelector } from '../../../Redux/GreenTextRedux'
import { orangeTextSelector } from '../../../Redux/OrangeTextRedux'

const Button = (props) => {
    const dispatch= useDispatch();
    const isGerman = useSelector(isGermanSelector);

    const animatedYellow= useSelector(yellowTextSelector)
    const animatedPink = useSelector(pinkTextSelector)
    const animatedGreen = useSelector(greenTextSelector)
    const animatedOrange = useSelector(orangeTextSelector)
    const yellowStyle={
        color: animatedYellow
    }
    const pinkStyle={
        color: animatedPink
    }
    const greenStyle={
        color: animatedGreen
    }
    const orangeStyle={
        color: animatedOrange
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
            pinkStyle={pinkStyle}
            greenStyle={greenStyle}
            orangeStyle={orangeStyle}
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