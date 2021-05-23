import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Metrics from '../../../StylingConstants/Metrics';
import Button from '../Component/Button';
import style from '../Styles/ExamplesScreenStyle';
import styles from '../Styles/ExamplesScreenStyle';

const Examples = () => {
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
                        onValueChange={(itemValue, itemIndex) => setArticleType(itemValue)
                        }
                    >
                        <Picker.Item color="black" label="No" value="no" />
                        <Picker.Item color="black" label="Indefinite" value="indefinite" />
                        <Picker.Item color="black" label="definite" value="definite" />
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
                        onValueChange={(itemValue, itemIndex) => setHasAdjective(itemValue)}>
                        <Picker.Item color="black" label="with" value="with" />
                        <Picker.Item color="black" label="without" value="without" />
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
                        onValueChange={(itemValue, itemIndex) => setNounGenderType(itemValue)}
                    >
                        <Picker.Item color="black" label="masculine" value="masculine" />
                        <Picker.Item color="black" label="feminine" value="feminine" />
                        <Picker.Item color="black" label="neutral" value="neutral" />
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
                        onValueChange={(itemValue, itemIndex) => setCaseType(itemValue)
                        }>
                        <Picker.Item color="black" label="Nominative" value="nominative" />
                        <Picker.Item color="black" label="Accusative" value="accusative" />
                        <Picker.Item color="black" label="Dative" value="dative" />
                        <Picker.Item color="black" label="Genitive" value="genitive" />
                    </Picker>
                </View>
                <Text style={styles.textAfterCase}>case</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button articleType={articleType} hasAdjective={hasAdjective}
                    nounGenderType={nounGenderType} caseType={caseType}
                />
            </View>
        </View>
    )
}

export default Examples