import {
    CREATE_CART,
    UPDATE_QUANTITY,
    SHOW_CART
} from "./actionTypes";
/**
 * @description User Logged in state
 * @param {Object} message
 * @returns {Object} new State
 */
export const CreateCart = cart => {
    console.log('card-dispatch-action', cart);
    return {
        type: CREATE_CART,
        payload: cart
    };
};
/**
 * @description User Logged in state
 * @param {Object} message
 * @returns {Object} new State
 */
export const UpdateQuantity = (product) => {
    return {
        type: UPDATE_QUANTITY,
        payload: product

    };
};

export const showCard = (isShow) => {
    console.log('ishow', isShow);
    return {
        type: SHOW_CART,
        payload: isShow
    };
};