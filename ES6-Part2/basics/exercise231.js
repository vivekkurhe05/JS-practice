/**
 * Write a JavaScript program to iterate over all the properties of an object in reverse, 
 * running a callback for each one.
 */

// my sol
function forOwnRight(obj) {
    return Object.keys(obj).map(el=> obj[el].reverse());
}

console.log(forOwnRight({ foo: 'bar', a: 1 }));