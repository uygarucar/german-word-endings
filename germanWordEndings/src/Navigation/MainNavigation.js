import React from 'react'
import TabNavigation from './TabNavigation'
import { NavigationContainer } from '@react-navigation/native'

import { Provider } from 'react-redux'
import {store} from '../Redux/ReduxManager'

const MainNavigation = () => {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <TabNavigation />
            </NavigationContainer>
        </Provider>
    )
}

export default MainNavigation