
const iniitialState = {
    count: 1
}

export const addToCardState = (state = iniitialState, action) => {

    switch (action.type) {
        case "INCREMENT": {
            return {
                ...state,
                count: Number(state.count) + 1
            }
        }
        case "DECREMENT": {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case "SET_INPUT_VALUE" :{
            return{
                ...state,
                count: action.payload
            }
        }
        case "VALID_COUNT" : {
            return {
                ...state,
                count: action.payload
            }
        }
        default: {
            return state
        }
    }
}