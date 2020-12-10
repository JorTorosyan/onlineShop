
export function increaseCount() {
    return ({ type: 'INCREMENT' });
}

export function decreaseCount() {
    return ({ type: 'DECREMENT' });
}
export function validCount(){
    return ({type: "VALID_COUNT", payload: 1})
}