/**
 * Write a Python program to remove spaces from dictionary keys.
 */

let student_list = {
    'S  001': ['Math', 'Science'], 
    'S    002': ['Math', 'English']
}

const re = /\s+/g;
let obj = {};
let keys = Object.keys(student_list);
let values = Object.values(student_list);
keys = keys.map(key => key.replace(re, ""));

for(let i=0;i<keys.length;i++) {
    if(!(keys[i] in obj)) {
        obj[keys[i]] = values[i];
    }
}

console.log(obj);

