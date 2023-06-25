/**
 * Write a Python program to match key values in two dictionaries.
 */

// my solution
// work on this
let x = {'key1': 1, 'key2': 3, 'key3': 2}
let y = {'key1': 1, 'key2': 2}

Object.keys(x).forEach(key => {
    if(y.hasOwnProperty(key) && y[key] === x[key]) {
        console.log(`${key}: ${x[key]} is present in both x and y`)
    }
})
