/**
 * Write a Python program to filter a dictionary based on values.
Original Dictionary:
{'Cierra Vega': 175, 'Alden Cantrell': 180, 'Kierra Gentry': 165, 'Pierre Cox': 190}
Marks greater than 170:
{'Cierra Vega': 175, 'Alden Cantrell': 180, 'Pierre Cox': 190}
 */

// my solution
let obj1 = {'Cierra Vega': 175, 'Alden Cantrell': 180, 'Kierra Gentry': 165, 'Pierre Cox': 190}
let obj2 = {}

for (let key in obj1) {
    if(obj1[key] <= 170) {
        delete obj1.key
    }else {
        obj2[key] = obj1[key]
    }
}

console.log(obj2)