const initialState = {
    loading: false,
    error: null,
    subCreationData: null
}

export const subscriptionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBS_CREATE_START': {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case 'SUBS_CREATE_SUCCESS': {
            return {
                ...state,
                loading: false,
                error: null,
                subCreationData: action.payload
            }
        }
        case 'SUBS_CREATE_FAILED': {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        case 'DELETE_SUBS_MESSAGE': {
            return {
                ...state,
                subCreationData: '' 
            }
        }
        default: {
            return state
        }
    }
}