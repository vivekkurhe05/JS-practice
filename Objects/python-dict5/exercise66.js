/**
 * Write a Python program to check if a specific key and a value exist in a dictionary.
 */

function test(arr, key, value) {

    return arr.some(obj => {
        return key in obj && obj[key] === value;
    });
}

let students = [
    {'student_id': 1, 'name': 'Jean Castro', 'class': 'V'}, 
    {'student_id': 2, 'name': 'Lula Powell', 'class': 'V'},
    {'student_id': 3, 'name': 'Brian Howell', 'class': 'VI'}, 
    {'student_id': 4, 'name': 'Lynne Foster', 'class': 'VI'}, 
    {'student_id': 5, 'name': 'Zachary Simon', 'class': 'VII'}
]

console.log(test(students,'student_id', 1)) // true
console.log(test(students,'name', 'Brian Howell')) // true
console.log(test(students,'class', 'VII')) // true
console.log(test(students,'class', 'I')) // false
console.log(test(students,'name', 'Brian Howelll')) // false
console.log(test(students,'student_id', 11)) // false