//Initial State
const INITIAL_STATE = {
    name: false
}
//Selector
export const isPersonalizedAd= state => state.adState.name

//Action Type
const CHANGE_ADTYPE = "adType/change_adType"

//Action Creators
export const setAdType = (adType) => {

    return {
        type: CHANGE_ADTYPE,
        payload: {
            adType,
        }
    }
}

//Reducer
export const adReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_ADTYPE:
            let newName = action.payload.adType;
            return {
                name: newName
            };
        default:
            return state;
    }
};

