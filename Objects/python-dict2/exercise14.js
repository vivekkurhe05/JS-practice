/**
 * Write a Python program to sort a given dictionary by key.
 */

let color_dict = {'red':'#FF0000',
    'green':'#008000',
    'black':'#000000',
    'white':'#FFFFFF'}

let arr = Object.entries(color_dict)
console.log(arr.sort())