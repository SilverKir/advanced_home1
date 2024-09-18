
/**
 * 
 * @param {*} obj  Object
 * @param {*} oder order of first keys
 * @returns  sorted array of Object properties
 */
export function orderByProps(obj, oder) {
    const result = []
    let keysArray = makeKeysArray(obj);
    keysArray = sortKeysArray(keysArray, oder);
    keysArray.forEach(element => {
        result.push({ key: element, value: obj[element] })
    })
    return result;
};

/**
 * 
 * @param {*} obj  Object
 * @returns  array of Object keys
 */

function makeKeysArray(obj) {
    const result = [];
    for (const prop in obj) {
        result.push(prop)
    }
    return result.sort();
};

/**
 * 
 * @param {*} array  initial array
 * @param {*} oder oder of first elements
 * @returns  Sorted array
 */

function sortKeysArray(array, oder) {
    oder.forEach(element => {
        array.splice(array.indexOf(element), 1)
    });

    return [...oder, ...array];
}