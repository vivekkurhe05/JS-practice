/**
 * Write a Python program to get the maximum and minimum values of a dictionary.
 */

my_dict = {'x':500, 'y':5874, 'z': 560}
let values = Object.values(my_dict)
values.sort((a,b)=>a-b);
console.log(values[0])
console.log(values[values.length-1])