/**
 * Write a Python program to iterate over dictionaries using for loops.
 */

let d = {'x': 10, 'y': 20, 'z': 30}
for(const key in d) {
    console.log(key+": "+d[key])
}