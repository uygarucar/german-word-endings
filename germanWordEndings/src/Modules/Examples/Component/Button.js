import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { SampleSentences } from '../SampleSentencesData'

import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {isGermanSelector} from '../../../Redux/LanguageRedux'
import {setIsGermanAC} from '../../../Redux/LanguageRedux'
import styles from '../Styles/ExamplesScreenStyle'

const Button = (props) => {
    const dispatch= useDispatch();
    const isGerman = useSelector(isGermanSelector);

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
            <SampleSentences onPress_FlipCard={_FlipCard} 
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