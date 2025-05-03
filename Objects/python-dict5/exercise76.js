/**
 * Write a Python program to combine two lists into a dictionary. 
 * The elements of the first one serve as keys and the elements of the second one serve as values. 
 * Each item in the first list must be unique and hashable.
Sample Output:
Original lists:
['a', 'b', 'c', 'd', 'e', 'f']
[1, 2, 3, 4, 5]
Combine the values of the said two lists into a dictionary:
{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
 */

let keys = ['a', 'b', 'c', 'd', 'e', 'f'];
let values = [1, 2, 3, 4, 5];

let obj = {};

const arr = keys.map((el,i) => {
    if(values[i] !== undefined) return [el, values[i]];
}).filter(el => el !== undefined);

obj = Object.fromEntries(arr);
console.log(obj);