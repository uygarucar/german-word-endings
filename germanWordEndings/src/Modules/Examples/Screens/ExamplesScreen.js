import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Metrics from '../../../StylingConstants/Metrics';
import Button from '../Component/Button';
import styles from '../Styles/ExamplesScreenStyle';

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { isGermanSelector } from '../../../Redux/LanguageRedux'
import { setIsGermanAC } from '../../../Redux/LanguageRedux'

const Examples = () => {

    const dispatch = useDispatch();
    const isGerman = useSelector(isGermanSelector);

    const [articleType, setArticleType] = useState('no');
    const [hasAdjective, setHasAdjective] = useState('with');
    const [nounGenderType, setNounGenderType] = useState('masculine');
    const [caseType, setCaseType] = useState('accusative');

    return (

        <View style={styles.container}>
            {/**1. */}
            <View style={styles.articleContainer}>
                <Text style={styles.textBeforeArticle}>Use </Text>
                <View style={styles.articleBox}>
                    <Picker
                        itemStyle={{ fontSize: 15 }}

                        style={styles.articlePicker}
                        selectedValue={articleType}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) => {
                            setArticleType(itemValue);
                            dispatch(setIsGermanAC(false));
                        }
                        }
                    >


                        <Picker.Item color="black" label="indefinite" value="indefinite" />
                        <Picker.Item color="black" label="definite" value="definite" />
                        {(hasAdjective != 'without')
                            ?
                            <Picker.Item color="black" label="No" value="no" />
                            :
                            null}
                    </Picker>
                </View>
                <Text style={styles.textAfterArticle}>article</Text>
            </View>
            {/**2. */}
            <View style={styles.adjectiveContainer}>
                <View style={styles.adjectiveBox}>
                    <Picker style={styles.adjectivePicker}
                        selectedValue={hasAdjective}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) => 
                        {setHasAdjective(itemValue);
                        dispatch(setIsGermanAC(false))}}>
                        <Picker.Item color="black" label="with" value="with" />

                        {(articleType != 'no') ?
                            <Picker.Item color="black" label="without" value="without" />
                            :
                            null
                        }

                    </Picker>
                </View>
                <Text style={styles.textAfterAdjective}>adjective</Text>
            </View>
            {/**3. */}
            <View style={styles.nounGenderContainer}>
                <Text style={styles.textBeforeNounGender}>for</Text>
                <View style={styles.nounGenderBox}>
                    <Picker
                        mode='dropdown'
                        selectedValue={nounGenderType}
                        onValueChange={(itemValue, itemIndex) => {setNounGenderType(itemValue)
                            dispatch(setIsGermanAC(false))}}
                    >
                        <Picker.Item color="black" label="Masculine" value="masculine" />
                        <Picker.Item color="black" label="Feminine" value="feminine" />
                        <Picker.Item color="black" label="Neuter" value="neutral" />
                    </Picker>
                </View>
                <Text style={styles.textAfterNounGender}>noun</Text>
            </View>
            {/* 4. */}
            <View style={styles.caseContainer}>
                <Text style={styles.textBeforeCase}>and for</Text>
                <View style={styles.caseBox}>
                    <Picker
                        itemStyle={{ fontSize: 15 }}
                        style={styles.casePicker}

                        selectedValue={caseType}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) => {setCaseType(itemValue)
                            dispatch(setIsGermanAC(false))}
                        }>
                        <Picker.Item color="black" label="Nominative" value="nominative" />
                        <Picker.Item color="black" label="Accusative" value="accusative" />
                        <Picker.Item color="black" label="Dative" value="dative" />
                        <Picker.Item color="black" label="Genitive" value="genitive" />
                    </Picker>
                </View>
                <Text style={styles.textAfterCase}>case</Text>
            </View>
            <View style={styles.textOverButtonContainer}>
                <Text style={styles.textOverButton}>Sample Sentence</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.innerButtonContainer}>
                    <Button articleType={articleType} hasAdjective={hasAdjective}
                        nounGenderType={nounGenderType} caseType={caseType}
                    />
                </View>
            </View>
        </View>
    )
}

export default Examples