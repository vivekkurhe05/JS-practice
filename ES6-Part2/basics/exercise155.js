/**
 * Write a JavaScript program that takes a predicate and an array, 
 * like Array.filter(), but only keeps x if pred(x) returns false.
 */

// my sol
function reject(fn, arr) {
    return arr.filter(el => !fn(el));
}

console.log(reject(x => x % 2 === 0, [1, 2, 3, 4, 5])); // Output: [1, 3, 5]
console.log(reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana'])); // Output: ['Pear', 'Kiwi']