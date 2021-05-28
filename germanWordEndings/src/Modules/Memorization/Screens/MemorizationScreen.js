import React, { useState } from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native'

import { DataTable } from 'react-native-paper'
import Metrics from '../../../StylingConstants/Metrics';
import VisibilityToggle from '../Component/VisibilityToggle'
import styles from '../Styles/MemorizationStyles'

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
        <View>
            <FlatList
                data={TablesData}
                renderItem={_renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Memorization