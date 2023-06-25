/**
 * Write a Python program to split a given dictionary of lists into lists of dictionaries.
Original dictionary of lists:
{'Science': [88, 89, 62, 95], 'Language': [77, 78, 84, 80]}
Split said dictionary of lists into list of dictionaries:
[{'Science': 88, 'Language': 77}, {'Science': 89, 'Language': 78}, {'Science': 62, 'Language': 84}, {'Science': 95, 'Language': 80}]
 */

// my solution
let obj = {
    'Science': [88, 89, 62, 95], 
    'Language': [77, 78, 84, 80]
}

let arr = []
for (let i=0; i<obj['Science'].length; i++) {
    let obj1 = {}
    obj1['Science'] = obj['Science'][i]
    obj1['Language'] = obj['Language'][i]
    arr.push(obj1)
}

console.log(arr)