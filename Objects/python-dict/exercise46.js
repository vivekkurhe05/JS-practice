/**
 * Write a Python program to create a dictionary grouping a sequence of key-value pairs into a dictionary of lists.
Original list:
[('yellow', 1), ('blue', 2), ('yellow', 3), ('blue', 4), ('red', 1)]
Grouping a sequence of key-value pairs into a dictionary of lists:
{'yellow': [1, 3], 'blue': [2, 4], 'red': [1]}
 */

// work on this
let arr = [['yellow', 1], ['blue', 2], ['yellow', 3], ['blue', 4], ['red', 1]]

let obj = {}
let val = []

for (let i=0; i<arr.length; i++) {
    if (!(arr[i][0] in obj)) obj[arr[i][0]] = [arr[i][1]]
}
console.log(obj)