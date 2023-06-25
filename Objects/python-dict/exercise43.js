/**
 * Write a Python program to convert more than one list to a nested dictionary.
Original strings:
['S001', 'S002', 'S003', 'S004']
['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards']
[85, 98, 89, 92]
Nested dictionary:
[{'S001': {'Adina Park': 85}}, {'S002': {'Leyton Marsh': 98}}, {'S003': {'Duncan Boyle': 89}}, {'S004': {'Saim Richards': 92}}]
 */

// my solution
// work on this
let keys= ['S001', 'S002', 'S003', 'S004']
let sub_keys=['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards']
let values = [85, 98, 89, 92]
let arr = []

for (let key in keys) {
    let obj1 = {}
    let obj2 = {}
    obj2[sub_keys[key]] = values[key]
    obj1[keys[key]] = obj2
    arr.push(obj1)
}
console.log(arr)