import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { SampleSentenceEnglish } from '../SampleSentencesData'
import { SampleSentenceGerman } from '../SampleSentencesData'

const Button = (props) => {
    const [isGermanVisible, setIsGermanVisible] = useState(false);

    const sentenceToDisplay = isGermanVisible
        ? <Text style={{ fontSize: 20 }}>{SampleSentenceGerman[props.caseType][props.nounGenderType][props.hasAdjective][props.articleType]}</Text>

        : <Text style={{ fontSize: 20 }}> {SampleSentenceEnglish[props.caseType][props.nounGenderType][props.hasAdjective][props.articleType]}</Text>;

    const _FlipCard = () => {
        if (!isGermanVisible) {
            setIsGermanVisible(true)
        }
        else {
            setIsGermanVisible(false)
        }
    }



    return (
        <>
            <TouchableOpacity onPress={_FlipCard} style={{ alignContent: 'center',  marginHorizontal: 50, alignItems: 'center' }}>

                {/* {!isGermanVisible ? <Text style={{ fontSize: 15 }}>Sample Sentence</Text>
                    : null
                } */}
                {!isGermanVisible ? <Text style={{ fontSize: 15 }}>Click to see in German</Text> : null}
                {sentenceToDisplay}

            </TouchableOpacity>
        </>
    )
}

export default Button