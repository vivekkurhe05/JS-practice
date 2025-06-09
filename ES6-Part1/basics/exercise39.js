/**
 * Write a JavaScript program to remove the key-value pairs 
 * corresponding to the given keys from an object.
 */

// my sol
function omit(obj, arr) {
    return Object.keys(obj)
    .filter(el => !arr.includes(el))
    .reduce((acc, cur) => {
        acc[cur] = obj[cur];
        return acc;
    }, {});
}

console.log(omit({ a: 1, b: '2', c: 3 }, ['b'])); // Output: { a: 1, c: 3 }
console.log(omit({ a: 1, b: 2, c: 3 }, ['c'])); // Output: { a: 1, b: 2 }