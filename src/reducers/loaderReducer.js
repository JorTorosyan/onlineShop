import {
    CHANGE_LOADER
} from "../actions/actionTypes/";

export const LoaderReducer = (state = false, action) => {
    switch (action.type) {
        case CHANGE_LOADER:
            return !!action.payload;
        default:
            return state;
    }
};

// export default UserReducer;
