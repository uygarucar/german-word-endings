//Initial State
const INITIAL_STATE = {
    name: null
}
//Selector
export const pinkTextSelector= state => state.pinkTextState.name

//Action Type
const CHANGE_PINKTEXT = "pinkText/change_pinkText"

//Action Creators
export const setPinkTextAC = (name) => {

    return {
        type: CHANGE_PINKTEXT,
        payload: {
            name,
        }
    }
}

//Reducer
export const pinkTextReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_PINKTEXT:
            let newName = action.payload.name;
            return {
                name: newName
            };
        default:
            return state;
    }
};