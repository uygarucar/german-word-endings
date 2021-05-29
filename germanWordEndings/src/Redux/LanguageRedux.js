//Initial State
const INITIAL_STATE = {
    name: false
}
//Selector
export const isGermanSelector= state => state.languageState.name

//Action Type
const CHANGE_LANGUAGE = "language/change_language"

//Action Creators
export const setIsGermanAC = (name) => {

    return {
        type: CHANGE_LANGUAGE,
        payload: {
            name,
        }
    }
}

//Reducer
export const languageReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_LANGUAGE:
            let newName = action.payload.name;
            return {
                name: newName
            };
        default:
            return state;
    }
};