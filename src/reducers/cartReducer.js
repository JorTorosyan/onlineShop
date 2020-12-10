import {
    CREATE_CART,
    UPDATE_QUANTITY,
    SHOW_CART
} from "../actions/actionTypes";
const initialState = {
    count: 0,
    products: [],
    totalSum: 0,
    showModal: false
};

export const CartReducer = (state = initialState, action) => {
    // console.log('action', action.payload);
    switch (action.type) {
        case CREATE_CART:
            return {
                ...state,
                count: action.payload.count !== undefined ? action.payload.count : state.count,
                totalSum: action.payload.totalSum !== undefined ? action.payload.totalSum : state.totalSum,
                products: [
                    ...action.payload.products
                ],

            };
        case UPDATE_QUANTITY:
            return {
                ...state,

                products: [
                    ...action.payload
                ]
            };
        // case ADD_QUANTITY:
        //     console.log(action.payload);
        //     return {
        //         ...state,
        //         count: action.payload.count !== undefined ? action.payload.count : state.count,
        //         totalSum: action.payload.totalSum  !== undefined ? action.payload.totalSum : state.totalSum,
        //         products: [
        //             ...state.products,
        //             ...state.payload.pro
        //         ]
        //     };

        default:
            return state;
    }
};



export const CartOpenReducer = (state = { showModal: false }, action) => {
    switch (action.type) {
        case SHOW_CART: {
            return {
                ...state,
                showModal: action.payload
            };
        }
        default:
            return state;
    }
};