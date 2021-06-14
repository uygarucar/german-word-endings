import {createStore, combineReducers} from 'redux'
import {languageReducer} from './LanguageRedux'
import {adReducer} from './AdRedux'
import { articleReducer } from './ArticleRedux'
import { adjectiveReducer } from './AdjectiveRedux'
import { nounReducer } from './NounRedux'
import { caseReducer } from './CaseRedux'

const rootReducer =combineReducers({
    languageState: languageReducer,
    adState: adReducer,
    articleState: articleReducer,
    adjectiveState: adjectiveReducer,
    nounState: nounReducer,
    caseState: caseReducer
}) 

export const store = createStore(rootReducer);