import React, { useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, SafeAreaView, ScrollView } from 'react-native'

import { DataTable } from 'react-native-paper'
import Metrics from '../../../StylingConstants/Metrics';
import VisibilityToggle from '../Component/VisibilityToggle'
import styles from '../Styles/MemorizationStyles'

import { BannerAd, TestIds, BannerAdSize } from '@react-native-firebase/admob'

import TablesData from '../TablesData'

const Memorization = () => {

    const _renderItem = ({ item }) => {

        return (
            <>
                <View style={styles.itemContainer}>
                    <VisibilityToggle title={item.title} content={item.content} itemId={item.id} multiline={item.isMultiline} />
                </View>
            </>
        )
    }



    return (

        <SafeAreaView style={{ flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
            
                    <FlatList
                        data={TablesData}
                        renderItem={_renderItem}
                        keyExtractor={(item) => item.id}
                    />
                
            
            <View>
                <BannerAd
                    unitId={TestIds.BANNER}
                    size={BannerAdSize.SMART_BANNER}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
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