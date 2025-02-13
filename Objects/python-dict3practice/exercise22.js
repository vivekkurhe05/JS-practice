/**
 * Write a Python program to find the highest 3 values of corresponding keys in a dictionary.
 */

// my solution
my_dict = {'a':500, 'b':5874, 'c': 560,'d':400, 'e':5874, 'f': 20}
let arr = Object.values(my_dict)
arr.sort((a,b)=>b-a)
console.log(arr.slice(0,3))