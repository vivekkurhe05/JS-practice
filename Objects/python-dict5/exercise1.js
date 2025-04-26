/**
 * Write a Python program to sort (ascending and descending) a dictionary by value.
 */

const d = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0}

let asc = Object.entries(d)
asc = asc.sort((a,b) =>a[1]-b[1])
console.log(asc)
let des = Object.entries(d)
des = des.sort((a,b)=>b[1]-a[1])
console.log(des)