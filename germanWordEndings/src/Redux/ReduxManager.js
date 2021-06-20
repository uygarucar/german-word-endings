import {createStore, combineReducers} from 'redux'
import {languageReducer} from './LanguageRedux'
import {adReducer} from './AdRedux'
import { articleReducer } from './ArticleRedux'
import { adjectiveReducer } from './AdjectiveRedux'
import { nounReducer } from './NounRedux'
import { caseReducer } from './CaseRedux'

import { yellowTextReducer } from './YellowTextRedux'
import { pinkTextReducer } from './PinkTextRedux'
import { greenTextReducer } from './GreenTextRedux'
import { orangeTextReducer } from './OrangeTextRedux'

const rootReducer =combineReducers({
    languageState: languageReducer,
    adState: adReducer,
    articleState: articleReducer,
    adjectiveState: adjectiveReducer,
    nounState: nounReducer,
    caseState: caseReducer,
    yellowTextState: yellowTextReducer,
    pinkTextState: pinkTextReducer,
    greenTextState: greenTextReducer,
    orangeTextState: orangeTextReducer,
}) 

export const store = createStore(rootReducer);