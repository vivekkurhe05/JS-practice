/**
 * Write a Python program to convert a pair of values into a sorted unique array.
 * 
 */

// my solution
let L = [[1, 2], [3, 4], [1, 2], [5, 6], [7, 8], [1, 2], [3, 4], [3, 4],
    [7, 8], [9, 10]]

console.log(Array.from(new Set(L.flat(1))))