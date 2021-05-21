import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Examples from '../Modules/Examples/Screens/ExamplesScreen'
import Memorization from '../Modules/Memorization/Screens/MemorizationScreen'



const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="memorization-screen" 
                component={Memorization}
                options= {{title: "Memorization",
                           }}
                />
            <Tabs.Screen
                name="examples-screen" 
                component={Examples}
                options = {{title: "Examples"
                           }}
                />
        </Tabs.Navigator>
    )
}

export default TabNavigation