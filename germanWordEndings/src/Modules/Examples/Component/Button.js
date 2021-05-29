import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { SampleSentenceEnglish } from '../SampleSentencesData'
import { SampleSentenceGerman } from '../SampleSentencesData'

import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {isGermanSelector} from '../../../Redux/LanguageRedux'
import {setIsGermanAC} from '../../../Redux/LanguageRedux'


const Button = (props) => {
    const dispatch= useDispatch();
    const isGerman = useSelector(isGermanSelector);

    const sentenceToDisplay = isGerman
        ? <Text style={{ fontSize: 20 }}>{SampleSentenceGerman[props.caseType][props.nounGenderType][props.hasAdjective][props.articleType]}</Text>

        : <Text style={{ fontSize: 20 }}> {SampleSentenceEnglish[props.caseType][props.nounGenderType][props.hasAdjective][props.articleType]}</Text>;

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
            <TouchableOpacity onPress={_FlipCard} style={{ alignContent: 'center',  marginHorizontal: 50, alignItems: 'center' }}>

                {/* {!isGermanVisible ? <Text style={{ fontSize: 15 }}>Sample Sentence</Text>
                    : null
                } */}
                {!isGerman ? <Text style={{ fontSize: 15 }}>Click to see in German</Text> : null}
                {sentenceToDisplay}

            </TouchableOpacity>
        </>
    )
}

export default Button