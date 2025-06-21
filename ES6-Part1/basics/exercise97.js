/**
 * Write a JavaScript program to create an object composed of the properties the given function returns truthy for. 
 * The function is invoked with two arguments: (value, key).
 */

// my sol
function pickBy(obj, fn) {
    return Object.keys(obj).reduce((acc, cur) => {
        if(fn(obj[cur])) acc[cur] = obj[cur];
        return acc;
    }, {})
}

console.log(pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number')); // Output: { a: 1, c: 3 }