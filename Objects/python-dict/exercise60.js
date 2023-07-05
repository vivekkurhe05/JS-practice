/**
 * Write a Python program to find the shortest list of values for the keys in a given dictionary.
Original Dictionary: {'V': [10, 12], 'VI': [10], 'VII': [10, 20, 30, 40], 'VIII': [20], 'IX': [10, 30, 50, 70], 'X': [80]} 
Shortest list of values with the keys of the said dictionary: ['VI', 'VIII', 'X']
 */

// my solution
let obj = {
    'V': [10, 12], 
    'VI': [10], 
    'VII': [10, 20, 30, 40], 
    'VIII': [20], 
    'IX': [10, 30, 50, 70], 
    'X': [80]
}

let arr = []
let shortest = obj['V'].length
for (let key in obj) {
    if (shortest > obj[key].length) arr.push(key)
}

console.log(arr)