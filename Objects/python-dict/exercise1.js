/**
 * Write a Python program to sort (ascending and descending) a dictionary by value.
 */

// my solution
d = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0}

let arr=Object.entries(d)
arr=arr.sort((a,b) => a[1]-b[1])
console.log(arr)

arr=arr.sort((a,b)=>b[1]-a[1])
console.log(arr)
