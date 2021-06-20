import {createStore, combineReducers} from 'redux'
import {languageReducer} from './LanguageRedux'
import {adReducer} from './AdRedux'
import { articleReducer } from './ArticleRedux'
import { adjectiveReducer } from './AdjectiveRedux'
import { nounReducer } from './NounRedux'
import { caseReducer } from './CaseRedux'
import { yellowTextReducer } from './YellowTextRedux'

const rootReducer =combineReducers({
    languageState: languageReducer,
    adState: adReducer,
    articleState: articleReducer,
    adjectiveState: adjectiveReducer,
    nounState: nounReducer,
    caseState: caseReducer,
    yellowTextState: yellowTextReducer
}) 

export const store = createStore(rootReducer);