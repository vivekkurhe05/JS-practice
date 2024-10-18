/**
 * Write a Python program to sort a given dictionary by key.
 */

// my solution
color_dict = {'red':'#FF0000',
    'green':'#008000',
    'black':'#000000',
    'white':'#FFFFFF'}

console.log(color_dict)
let arr = Object.entries(color_dict)
console.log(Object.fromEntries(arr.sort()))