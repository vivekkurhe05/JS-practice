/**
 * Write a Python program to sort a given dictionary by key.
 */

color_dict = {
    'red':'#FF0000',
    'green':'#008000',
    'black':'#000000',
    'white':'#FFFFFF'
}

let arrOfArrays = Object.entries(color_dict)
arrOfArrays.sort()
console.log(Object.fromEntries(arrOfArrays))