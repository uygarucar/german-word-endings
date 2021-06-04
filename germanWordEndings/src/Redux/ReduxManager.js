import {createStore, combineReducers} from 'redux'
import {languageReducer} from './LanguageRedux'
import {adReducer} from './AdRedux'

const rootReducer =combineReducers({
    languageState: languageReducer,
    adState: adReducer
}) 

export const store = createStore(rootReducer);