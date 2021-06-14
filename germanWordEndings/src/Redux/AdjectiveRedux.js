//Initial State
const INITIAL_STATE = {
    name: 'with'
}
//Selector
export const adjectiveSelector= state => state.adjectiveState.name

//Action Type
const CHANGE_ADJECTIVE = "adjective/change_adjective"

//Action Creators
export const setAdjectiveAC = (name) => {

    return {
        type: CHANGE_ADJECTIVE,
        payload: {
            name,
        }
    }
}

//Reducer
export const adjectiveReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_ADJECTIVE:
            let newName = action.payload.name;
            return {
                name: newName
            };
        default:
            return state;
    }
};