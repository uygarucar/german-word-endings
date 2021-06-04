import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Metrics from '../../../StylingConstants/Metrics';
import Button from '../Component/Button';
import styles from '../Styles/ExamplesScreenStyle';

import { useSelector, useDispatch } from 'react-redux'
import { isGermanSelector } from '../../../Redux/LanguageRedux'
import { setIsGermanAC } from '../../../Redux/LanguageRedux'

import { isPersonalizedAd } from '../../../Redux/AdRedux'
import { setAdType } from '../../../Redux/AdRedux'

import admob, { MaxAdContentRating, BannerAd, TestIds, AdsConsent, AdsConsentStatus, BannerAdSize } from '@react-native-firebase/admob';

const Examples = () => {
    const dispatch = useDispatch();
    //Get the consent form once the component mounted if the user is from EEA and initial usage 
    useEffect(async () => {
        try {
            const consentInfo = await AdsConsent.requestInfoUpdate(['pub-8781477890081427']);
            if (consentInfo.isRequestLocationInEeaOrUnknown &&
                consentInfo.status === AdsConsentStatus.UNKNOWN) {
                const formResult = await AdsConsent.showForm({
                    privacyPolicy: "https://invertase.io/privacy-policy",
                    withPersonalizedAds: true,
                    withNonPersonalizedAds: true,
                });
                console.log("form result", formResult);
                if(formResult.status == 2)
                {dispatch(setAdType(true))}
                else
                {dispatch(setAdType(false))}
            }
        }
        catch (e) {
            console.log("error", e.message)
        }
    }, [])
    
    

    useEffect(() => {
        admob()
            .setRequestConfiguration({
                // Update all future requests suitable for parental guidance
                maxAdContentRating: MaxAdContentRating.PG,

                // Indicates that you want your content treated as child-directed for purposes of COPPA.
                tagForChildDirectedTreatment: true,

                // Indicates that you want the ad request to be handled in a
                // manner suitable for users under the age of consent.
                tagForUnderAgeOfConsent: true,
            })
            .then(() => {
                // Request config successfully set!
            })
    }, [])

    
    const isGerman = useSelector(isGermanSelector);

    const isPersonalized = useSelector(isPersonalizedAd);
    console.log("isPersonalized", isPersonalized)

    const [articleType, setArticleType] = useState('no');
    const [hasAdjective, setHasAdjective] = useState('with');
    const [nounGenderType, setNounGenderType] = useState('masculine');
    const [caseType, setCaseType] = useState('accusative');

    return (

        <SafeAreaView style={styles.container}>
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
                        onValueChange={(itemValue, itemIndex) => {
                            setHasAdjective(itemValue);
                            dispatch(setIsGermanAC(false))
                        }}>
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
                        onValueChange={(itemValue, itemIndex) => {
                            setNounGenderType(itemValue)
                            dispatch(setIsGermanAC(false))
                        }}
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
                        onValueChange={(itemValue, itemIndex) => {
                            setCaseType(itemValue)
                            dispatch(setIsGermanAC(false))
                        }
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
            <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <View>
                </View>
                <View>
                    <BannerAd
                        unitId="ca-app-pub-8781477890081427/2075472490" 
                        //unitId= {TestIds.BANNER}
                        size={BannerAdSize.SMART_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: isPersonalized,
                        }}
                    // Can be used later
                    // onAdLoaded={() => {
                    //     console.log('Advert loaded');
                    // }}
                    // onAdFailedToLoad={(error) => {
                    //     console.error('Advert failed to load: ', error);
                    // }}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Examples