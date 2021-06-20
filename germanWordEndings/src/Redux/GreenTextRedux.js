//Initial State
const INITIAL_STATE = {
    name: null
}
//Selector
export const greenTextSelector= state => state.greenTextState.name

//Action Type
const CHANGE_GREENTEXT = "greenText/change_greenText"

//Action Creators
export const setGreenTextAC = (name) => {

    return {
        type: CHANGE_GREENTEXT,
        payload: {
            name,
        }
    }
}

//Reducer
export const greenTextReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_GREENTEXT:
            let newName = action.payload.name;
            return {
                name: newName
            };
        default:
            return state;
    }
};