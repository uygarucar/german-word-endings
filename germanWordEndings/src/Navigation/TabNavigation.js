import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Examples from '../Modules/Examples/Screens/ExamplesScreen'
import Memorization from '../Modules/Memorization/Screens/MemorizationScreen'
import tabBarOptions from './styles/TabNavStyles'
const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tabs.Navigator tabBarOptions={tabBarOptions}>
             <Tabs.Screen
                name="examples-screen" 
                component={Examples}
                options = {{title: "Examples"
                           }}
                />
            <Tabs.Screen
                name="memorization-screen" 
                component={Memorization}
                options= {{title: "Memorization",
                           }}
                />
           
        </Tabs.Navigator>
    )
}

export default TabNavigation