/**
 * Write a Python program to iterate over dictionaries using for loops.
 */

// my solution
d = {'x': 10, 'y': 20, 'z': 30} 
for (let key in d) {
    console.log(key+" -> "+d[key])
}