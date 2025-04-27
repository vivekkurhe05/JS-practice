/**
 * Write a Python program to create a dictionary of keys x, y, and z where each key has as value a list 
 * from 11-20, 21-30, and 31-40 respectively. Access the fifth value of each key from the dictionary.
 */

let obj = {};

const keys = ["x","y","z"];

let val1 = [];
let val2 = [];
let val3 = [];
for(let i=11; i<=20; i++) {
    val1.push(i);
    val2.push(i+10);
    val3.push(i+20);
}
const values = [val1,val2,val3];

for(let i=0;i<keys.length;i++) {
    if(!(keys[i] in obj)) {
        obj[keys[i]] = values[i];
    }
}

console.log(obj)

