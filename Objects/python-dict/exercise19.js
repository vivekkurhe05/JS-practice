/**
 * Write a Python program to combine two dictionary by adding values for common keys.
d1 = {'a': 100, 'b': 200, 'c':300}
d2 = {'a': 300, 'b': 200, 'd':400}
Sample output: Counter({'a': 400, 'b': 400, 'd': 400, 'c': 300})
 */

// my solution
let d1 = {'a': 100, 'b': 200, 'c':300}
let d2 = {'a': 300, 'b': 200, 'd':400}
let d3 = {}

for (let key in d1) {
    d3[key] = d1[key]
}

for (let key in d2) {
    if (key in d3) {
        d3[key] += d2[key] 
    }else {
        d3[key] = d2[key]
    }
}

console.log(d3)