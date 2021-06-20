//Initial State
const INITIAL_STATE = {
    name: null
}
//Selector
export const yellowTextSelector= state => state.yellowTextState.name

//Action Type
const CHANGE_YELLOWTEXT = "yellowText/change_yellowText"

//Action Creators
export const setYellowTextAC = (name) => {

    return {
        type: CHANGE_YELLOWTEXT,
        payload: {
            name,
        }
    }
}

//Reducer
export const yellowTextReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_YELLOWTEXT:
            let newName = action.payload.name;
            return {
                name: newName
            };
        default:
            return state;
    }
};