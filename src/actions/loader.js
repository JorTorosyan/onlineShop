import {CHANGE_LOADER} from "./actionTypes";

/**
 * @description Show or not to show loader
 * @param boolean
 * @returns boolean
 */
export const ChangeLoader = boolean => {
    return {
        type: CHANGE_LOADER,
        payload: boolean

    };
};