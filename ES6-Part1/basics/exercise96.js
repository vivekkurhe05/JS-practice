/**
 * Write a JavaScript program to pick  the key-value pairs 
 * corresponding to the given keys from an object.
 */

// my sol
function pick(obj, arr) {
    return arr.reduce((acc, cur) => {
        acc[cur] = obj[cur];
        return acc;
    }, {});
}

console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c'])); // Output: { a: 1, c: 3 }