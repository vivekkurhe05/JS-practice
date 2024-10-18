/**
 * Write a Python program to print all distinct values in a dictionary.
Sample Data : [{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}]
Expected Output : Unique Values: {'S005', 'S002', 'S007', 'S001', 'S009'}
 */

// my solution
let arr = [
    {"V":"S001"}, 
    {"V": "S002"}, 
    {"VI": "S001"}, 
    {"VI": "S005"}, 
    {"VII":"S005"}, 
    {"V":"S009"},
    {"VIII":"S007"}
]

let newarr = arr.map(obj => Object.entries(obj))
newarr = newarr.flat(1).map(arr => arr[1])
console.log(Array.from(new Set(newarr)))