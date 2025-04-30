/**
 * Write a Python program to convert more than one list to a nested dictionary.
Original strings:
['S001', 'S002', 'S003', 'S004']
['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards']
[85, 98, 89, 92]
Nested dictionary:
[{'S001': {'Adina Park': 85}}, {'S002': {'Leyton Marsh': 98}}, {'S003': {'Duncan Boyle': 89}}, {'S004': {'Saim Richards': 92}}]
 */

let keys = ['S001', 'S002', 'S003', 'S004'];
let sub_keys = ['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards'];
let sub_values = [85, 98, 89, 92];
let arr = [];

if(keys.length === sub_keys.length && sub_keys.length === sub_values.length) {
    
    for(let i=0;i<keys.length;i++) {
        let obj = {};
        let sub_obj = {}
        sub_obj[sub_keys[i]] = sub_values[i]
        obj[keys[i]] = sub_obj
        arr.push(obj);
    }
}

console.log(arr);