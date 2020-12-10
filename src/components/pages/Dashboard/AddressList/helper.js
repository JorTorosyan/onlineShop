export function createListOfAddress(arr, isAdditional) {

    let createArrOfObj = [];

    arr && arr.forEach(el => {
        createArrOfObj.push({
            id: el.id,
            name: el.firstName + " " + el.lastName,
            address1: el.address1,
            address2: el.address2,
            city_of_address: el.city_of_address + ' ' + el.postal_code,
            country_of_address: el.country_of_address,
            number: el.number
        });
    });

    let listArr = [];
    createArrOfObj && createArrOfObj.forEach(el => {
        if (isAdditional) listArr.push(Object.values(el));
        else listArr = Object.values(el);
    });

    return listArr;
}