import React, { useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, SafeAreaView, ScrollView } from 'react-native'

import { useSelector } from 'react-redux'
import { isPersonalizedAd } from '../../../Redux/AdRedux'

import { DataTable } from 'react-native-paper'
import Metrics from '../../../StylingConstants/Metrics';
import VisibilityToggle from '../Component/VisibilityToggle'
import styles from '../Styles/MemorizationStyles'

import { BannerAd, TestIds, BannerAdSize } from '@react-native-firebase/admob'

import TablesData from '../TablesData'

const Memorization = () => {
    const isPersonalized = useSelector(isPersonalizedAd);
    const _renderItem = ({ item }) => {

        return (
            <>
                <View style={styles.itemContainer}>
                    <VisibilityToggle title={item.title} content={item.content} itemId={item.id} multiline={item.isMultiline} />
                </View>
            </>
        )
    }


    console.log("isPersonalized", isPersonalized)
    return (

        <SafeAreaView style={{ flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
            
                    <FlatList
                        data={TablesData}
                        renderItem={_renderItem}
                        keyExtractor={(item) => item.id}
                    />
                
            
            <View>
                <BannerAd
                    //unitId="ca-app-pub-8781477890081427/9088244033"
                    unitId={TestIds.BANNER}
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
            
        </SafeAreaView>
    )
}

export default Memorization