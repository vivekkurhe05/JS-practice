/**
 * Write a Python program to get the maximum and minimum values of a dictionary.
 */

// my solution
my_dict = {'x':500, 'y':5874, 'z': 560}
let arr = Object.values(my_dict)
console.log(arr.sort((a,b)=>a-b)[0]) // minimum
console.log(arr.sort((a,b)=>b-a)[0]) // maximum