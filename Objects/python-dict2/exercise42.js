/**
 * Write a Python program to filter a dictionary based on values.
Original Dictionary:
{'Cierra Vega': 175, 'Alden Cantrell': 180, 'Kierra Gentry': 165, 'Pierre Cox': 190}
Marks greater than 170:
{'Cierra Vega': 175, 'Alden Cantrell': 180, 'Pierre Cox': 190}
 */

// my solution
let obj1 = {'Cierra Vega': 175, 'Alden Cantrell': 180, 'Kierra Gentry': 165, 'Pierre Cox': 190}
let newObj = {}
for(let prop in obj1){
    if(obj1.hasOwnProperty(prop) && obj1[prop] > 170) {
        newObj[prop] = obj1[prop]
    }
}
console.log(newObj)