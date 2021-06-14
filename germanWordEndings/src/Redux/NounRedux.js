//Initial State
const INITIAL_STATE = {
    name: 'masculine'
}
//Selector
export const nounSelector= state => state.nounState.name

//Action Type
const CHANGE_NOUNGENDER = "nounGender/change_nounGender"

//Action Creators
export const setNounGenderAC = (name) => {

    return {
        type: CHANGE_NOUNGENDER,
        payload: {
            name,
        }
    }
}

//Reducer
export const nounReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_NOUNGENDER:
            let newName = action.payload.name;
            return {
                name: newName
            };
        default:
            return state;
    }
};