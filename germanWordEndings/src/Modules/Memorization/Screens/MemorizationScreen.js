import React, { useState } from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native'

import { DataTable } from 'react-native-paper'
import Metrics from '../../../StylingConstants/Metrics';
import VisibilityToggle from '../Component/VisibilityToggle'
import styles from '../Styles/MemorizationStyles'

const DummyData = [
    {
        id: 1,
        title: 'Only adjective',
        content: 'kleiner Tisch'
    },
    {
        id: 2,
        title: 'only definite',
        content: 'der Käse'
    }
]
const Memorization = () => {

    const _renderItem = ({ item }) => {

        return (
            <>
                <View style={styles.itemContainer}>
                    <VisibilityToggle title={item.title} content={item.content} itemId={item.id} />
                </View>
            </>
        )
    }



    return (
        <View>
            <FlatList
                data={DummyData}
                renderItem={_renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Memorization