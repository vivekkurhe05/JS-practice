/**
 * Write a JavaScript program to create an object composed of the properties 
 * the given function returns false for. 
 * The function is invoked with two arguments: (value and key).
 */

// my sol
function omitBy(obj, fn) {
    let result = {};
    for(let key in obj) {
        if(!fn(obj[key])) {
            result[key] = obj[key];
        }
    }

    return result;
}

console.log(omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number')); // Output: { b: '2' }