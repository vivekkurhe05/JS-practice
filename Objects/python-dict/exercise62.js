/**
 * Write a Python program to extract values from a given dictionary and create a list of lists from those values.
Original Dictionary:
[{'student_id': 1, 'name': 'Jean Castro', 'class': 'V'}, {'student_id': 2, 'name': 'Lula Powell', 'class': 'V'}, {'student_id': 3, 'name': 'Brian Howell', 'class': 'VI'}, {'student_id': 4, 'name': 'Lynne Foster', 'class': 'VI'}, {'student_id': 5, 'name': 'Zachary Simon', 'class': 'VII'}]
Extract values from the said dictionarie and create a list of lists using those values:
[
    [1, 'Jean Castro', 'V'], 
    [2, 'Lula Powell', 'V'], 
    [3, 'Brian Howell', 'VI'], 
    [4, 'Lynne Foster', 'VI'], 
    [5, 'Zachary Simon', 'VII']
]
[
    [1, 'Jean Castro'], 
    [2, 'Lula Powell'], 
    [3, 'Brian Howell'], 
    [4, 'Lynne Foster'], 
    [5, 'Zachary Simon']
]
[
    ['Jean Castro', 'V'], 
    ['Lula Powell', 'V'], 
    ['Brian Howell', 'VI'], 
    ['Lynne Foster', 'VI'], 
    ['Zachary Simon', 'VII']
]
 */

// my solution
let arr = [
    {'student_id': 1, 'name': 'Jean Castro', 'class': 'V'}, 
    {'student_id': 2, 'name': 'Lula Powell', 'class': 'V'}, 
    {'student_id': 3, 'name': 'Brian Howell', 'class': 'VI'}, 
    {'student_id': 4, 'name': 'Lynne Foster', 'class': 'VI'}, 
    {'student_id': 5, 'name': 'Zachary Simon', 'class': 'VII'}
]

let arr1 = []
let arr2 = []
let arr3 = []
for (let i=0; i<arr.length; i++) {
    arr1.push(Object.values(arr[i]))
    arr2.push(Object.values(arr[i]).slice(0, 2))
    arr3.push(Object.values(arr[i]).slice(1, arr.length))
}

console.log(arr1)
console.log(arr2)
console.log(arr3)