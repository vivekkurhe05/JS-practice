/**
 * Write a Python program to verify that all values in a dictionary are the same.
Original Dictionary:
{'Cierra Vega': 12, 'Alden Cantrell': 12, 'Kierra Gentry': 12, 'Pierre Cox': 12}
Check all are 12 in the dictionary.
True
Check all are 10 in the dictionary.
False
 */

// my solution
let obj = {
    'Cierra Vega': 12, 
    'Alden Cantrell': 12, 
    'Kierra Gentry': 12, 
    'Pierre Cox': 12
}

let arr = Object.values(obj)
console.log(arr.every(el => el===12))