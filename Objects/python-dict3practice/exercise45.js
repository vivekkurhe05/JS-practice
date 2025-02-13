/**
 * Write a Python program to verify that all values in a dictionary are the same.
Original Dictionary:
{'Cierra Vega': 12, 'Alden Cantrell': 12, 'Kierra Gentry': 12, 'Pierre Cox': 12}
Check all are 12 in the dictionary.
True
Check all are 10 in the dictionary.
False
 */

// my sol
let obj = {'Cierra Vega': 12, 'Alden Cantrell': 12, 'Kierra Gentry': 12, 'Pierre Cox': 12}
 console.log(Object.values(obj).every(val => val === 12))