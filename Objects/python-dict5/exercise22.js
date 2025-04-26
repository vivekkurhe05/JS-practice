/**
 * Write a Python program to find the highest 3 values of corresponding keys in a dictionary.
 */

const my_dict = {'a':500, 'b':5874, 'c': 560,'d':400, 'e':5874, 'f': 20}  
let values = Object.values(my_dict);
values = values.sort((a,b)=>b-a);
console.log(values.slice(0,3));