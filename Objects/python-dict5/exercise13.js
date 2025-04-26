/**
 * Write a Python program to map two lists into a dictionary.
 */

keys = ['red', 'green', 'blue']
values = ['#FF0000','#008000', '#0000FF']
let obj = {}

if(keys.length != values.length) {
    console.log("Length does not match")
}

for(let i=0;i<keys.length;i++) {
    obj[keys[i]] = values[i]
}
console.log(obj)