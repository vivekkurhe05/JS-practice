/**
 * Write a Python program to sort (ascending and descending) a dictionary by value.
 */

// my solution
d = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0}
let arr = Object.entries(d)
console.log(arr.sort((a,b)=>a[1]-b[1]))