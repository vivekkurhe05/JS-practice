/**
 * Write a Python program to create a dictionary from two lists without losing duplicate values.
Sample lists: ['Class-V', 'Class-VI', 'Class-VII', 'Class-VIII'], [1, 2, 2, 3]
Expected Output: defaultdict(<class 'set'>, {'Class-V': {1}, 'Class-VI': {2}, 'Class-VII': {2}, 'Class-VIII': {3}})
 */

const keys = ['Class-V', 'Class-VI', 'Class-VII', 'Class-VIII'];
const values = [1, 2, 2, 3];
let obj = {};

if(keys.length != values.length) {
    console.log("Keys and values don't match!!");
}

for(let i=0;i<keys.length;i++) {
    if(!(keys[i] in obj)) {
        obj[keys[i]] = values[i]
    }
}
console.log(obj);