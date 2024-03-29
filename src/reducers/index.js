const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters:action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
        }
        case 'FILTERS_CHANGE':


            console.log(state);
            return {
                ...state,
                activeFilter: action.payload,
        }


        default: return state
    }
}

export default reducer;