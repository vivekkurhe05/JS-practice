/**
 * Write a Python script to check whether a given key already exists in a dictionary.
 */

function isKeyPresent(obj, key) {
    return key in obj;
}

let d = {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}
console.log(isKeyPresent(d,5))
console.log(isKeyPresent(d,9))