//Initial State
const INITIAL_STATE = {
    name: 'no'
}
//Selector
export const articleSelector= state => state.articleState.name

//Action Type
const CHANGE_ARTICLE = "article/change_article"

//Action Creators
export const setArticleAC = (name) => {

    return {
        type: CHANGE_ARTICLE,
        payload: {
            name,
        }
    }
}

//Reducer
export const articleReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_ARTICLE:
            let newName = action.payload.name;
            return {
                name: newName
            };
        default:
            return state;
    }
};