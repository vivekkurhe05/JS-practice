/**
 * Write a Python script to merge two Python dictionaries.
 */

d1 = {'a': 100, 'b': 200}
d2 = {'x': 300, 'y': 200}
let obj = {}
obj = Object.assign(obj, d1, d2);
console.log(obj)