/**
 * Write a Python program to create a dictionary from two lists without losing duplicate values.
Sample lists: ['Class-V', 'Class-VI', 'Class-VII', 'Class-VIII'], [1, 2, 2, 3]
Expected Output: defaultdict(<class 'set'>, {'Class-V': {1}, 'Class-VI': {2}, 'Class-VII': {2}, 'Class-VIII': {3}})
 */

let keys = ['Class-V', 'Class-VI', 'Class-VII', 'Class-VIII']
let values=[1, 2, 2, 3]
let obj={}

keys.forEach((key,i) => {
    obj[key] = values[i]
})
console.log(obj)