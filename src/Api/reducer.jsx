const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
            };
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter(
                    (curElem) => curElem.objectID !== action.payload
                ),
            };
        case "SEARCH_QUERY":
            return {
                ...state,
                query: action.payload,
            };
        default:
            return state;
    }
};
export default reducer;
