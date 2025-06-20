/**
 * Write a JavaScript program to get the maximum value of an array, 
 * after mapping each element to a value using the provided function.
 */

// w3resource sol
function maxBy(arr, fn) {
    return Math.max(...arr.map(typeof fn === "function" ? fn : val => val[fn]));
}

console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n)); // Outputs: 8 (maximum value of 'n')
console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')); // Outputs: 8 (maximum value of 'n')