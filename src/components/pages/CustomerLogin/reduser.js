
const initialState = {
    loading: false,
    user: null,
    error: null,
    isAuth:false
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'AUTH_START':
            return {
                ...state,
                loading: true
            }
        case 'AUTH_SUCCESS':
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                user: action.payload.user,
                isAuth: true
            }
        case 'AUTH_FILED':
            return {
                ...state,
                loading: false,
                error: 'samething went wrong',
                user: null,
            }

        default:
            return state;
    }
}


