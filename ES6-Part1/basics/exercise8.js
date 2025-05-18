/**
 * Write a JavaScript program to filter out the specified values from a specified array. 
 * Return the original array without filtered values.
 */

function pull(arr, ...ele) {
    return arr.filter(el => !ele.includes(el))
}

let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra1, 'a', 'c')); // Output: ['b', 'b']
let arra2 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra2, 'b')); // Output: ['a', 'c', 'a', 'c']