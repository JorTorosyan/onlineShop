
import {
    WARNING_MESSAGE,
    SUCCESS_MESSAGE
} from "./actionTypes";


export const warnMessageCreate = (message) => {
    return {
        type: WARNING_MESSAGE,
        payload: message
    };
};

export const succMessageCreate = (message) => {
    return {
        type: SUCCESS_MESSAGE,
        payload: message
    };
};


