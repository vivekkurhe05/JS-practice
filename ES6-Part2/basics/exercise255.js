/**
 * Write a JavaScript program that returns true if the provided predicate function returns true for 
 * at least one element in a collection, false otherwise.
 */

function any(arr, fn=Boolean) {
    return arr.some(el => fn(el));
}

console.log(any([0, 1, 2, 0], x => x >= 2)); // true (at least one element is greater than or equal to 2)
console.log(any([0, 0, 1, 0])); // true (at least one element is truthy)