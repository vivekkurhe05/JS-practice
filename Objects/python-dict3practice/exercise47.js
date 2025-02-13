/**
 * Write a Python program to split a given dictionary of lists into lists of dictionaries.
Original dictionary of lists:
{'Science': [88, 89, 62, 95], 'Language': [77, 78, 84, 80]}
Split said dictionary of lists into list of dictionaries:
[{'Science': 88, 'Language': 77}, {'Science': 89, 'Language': 78}, {'Science': 62, 'Language': 84}, {'Science': 95, 'Language': 80}]
 */

// my sol
let obj = {'Science': [88, 89, 62, 95], 'Language': [77, 78, 84, 80]}
let arr = []

for(let i=0;i<4;i++){
    let sci = obj['Science']
    let lan = obj['Language']
    let sub = {
        'Science': sci[i],
        'Language': lan[i]
    }
    arr.push(sub)
}
console.log(arr)