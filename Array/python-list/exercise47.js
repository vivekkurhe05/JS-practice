/**
 * Write a Python program to insert an element before each element of a list.
 */

// my solution
let color = ['Red', 'Green', 'Black']

for(let i=0; i<color.length; i+=2) {
    color.splice(i,0,"c")
}

console.log(color)