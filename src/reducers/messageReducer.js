import {
    WARNING_MESSAGE,
    SUCCESS_MESSAGE
} from "../actions/actionTypes/";

const initialState = {
    succMessage: "",
    warnMessage: ""
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case WARNING_MESSAGE:
            return {
                ...state,
                warnMessage: action.payload
            };
        case SUCCESS_MESSAGE:
            return {
                ...state,
                succMessage: action.payload
            };
        default:
            return state;
    }
};
