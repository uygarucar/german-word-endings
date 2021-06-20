//Initial State
const INITIAL_STATE = {
    name: null
}
//Selector
export const orangeTextSelector= state => state.orangeTextState.name

//Action Type
const CHANGE_ORANGETEXT = "orangeText/change_orangeText"

//Action Creators
export const setOrangeTextAC = (name) => {

    return {
        type: CHANGE_ORANGETEXT,
        payload: {
            name,
        }
    }
}

//Reducer
export const orangeTextReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_ORANGETEXT:
            let newName = action.payload.name;
            return {
                name: newName
            };
        default:
            return state;
    }
};