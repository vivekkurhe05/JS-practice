/**
 * Write a Python script to merge two Python dictionaries.
 */

// my solution
d1 = {'a': 100, 'b': 200}
d2 = {'x': 300, 'y': 200}

d3=Object.assign({},d1,d2)
console.log(d3)