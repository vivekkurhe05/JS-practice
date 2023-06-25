/**
 * Write a Python script to check whether a given key already exists in a dictionary.
 */

// my solution
function isKeyPresent(dict, key) {
    return key in dict
}

d = {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}
console.log(isKeyPresent(d,5))
console.log(isKeyPresent(d,9))