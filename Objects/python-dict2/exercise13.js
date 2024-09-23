/**
 * Write a Python program to map two lists into a dictionary.
 */

// my solution
let keys = ['red', 'green', 'blue']
let values = ['#FF0000','#008000', '#0000FF']
let arr = []

if(keys.length === values.length){
    for(let i=0; i<keys.length; i++) {
        arr.push([keys[i], values[i]])
    }
}

console.log(Object.fromEntries(arr))