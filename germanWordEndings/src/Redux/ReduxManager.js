import {createStore, combineReducers} from 'redux'
import {languageReducer} from './LanguageRedux'

const rootReducer =combineReducers({
    languageState: languageReducer
}) 

export const store = createStore(rootReducer);