/**
 * Write a Python program to filter a dictionary based on values.
Original Dictionary:
{'Cierra Vega': 175, 'Alden Cantrell': 180, 'Kierra Gentry': 165, 'Pierre Cox': 190}
Marks greater than 170:
{'Cierra Vega': 175, 'Alden Cantrell': 180, 'Pierre Cox': 190}
 */

// my sol
const dict = {'Cierra Vega': 175, 'Alden Cantrell': 180, 'Kierra Gentry': 165, 'Pierre Cox': 190}
const obj = {}
for(let key in dict) {
    if(dict[key] > 170){
        obj[key] = dict[key]
    }
}
console.log(obj)