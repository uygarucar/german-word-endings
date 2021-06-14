//Initial State
const INITIAL_STATE = {
    name: 'accusative'
}
//Selector
export const caseSelector= state => state.caseState.name

//Action Type
const CHANGE_CASE = "case/change_case"

//Action Creators
export const setCaseAC = (name) => {

    return {
        type: CHANGE_CASE,
        payload: {
            name,
        }
    }
}

//Reducer
export const caseReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_CASE:
            let newName = action.payload.name;
            return {
                name: newName
            };
        default:
            return state;
    }
};