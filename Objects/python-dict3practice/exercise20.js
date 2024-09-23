/**
 * Write a Python program to print all distinct values in a dictionary.
Sample Data : [{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}]
Expected Output : Unique Values: {'S005', 'S002', 'S007', 'S001', 'S009'}
 */

let arr=[
    {"V":"S001"}, 
    {"V": "S002"}, 
    {"VI": "S001"}, 
    {"VI": "S005"}, 
    {"VII":"S005"}, 
    {"V":"S009"},
    {"VIII":"S007"}
]

arr = arr.map(obj => Object.values(obj))
arr = arr.flat(1)
let iterator = new Set(arr)
let new_arr = Array.from(iterator)
console.log(new_arr)