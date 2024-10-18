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
let keys = ['S001', 'S002', 'S003', 'S004']
let subKeys = ['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards']
let subValues = [85, 98, 89, 92]

let arr = []

for(let i=0; i<subKeys.length; i++) {
    let sub_obj = {}, obj={}
    sub_obj[subKeys[i]] = subValues[i]
    obj[keys[i]] = sub_obj
    arr.push(obj)

}
console.log(arr)