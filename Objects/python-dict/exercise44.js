/**
 * Write a Python program to filter the height and width of students, which are stored in a dictionary.
 * height > 6ft and weight > 70kg
 */

// my solution
let students = {
    'Cierra Vega': [6.2, 70], 
    'Alden Cantrell': [5.9, 65], 
    'Kierra Gentry': [6.0, 68], 
    'Pierre Cox': [5.8, 66]
}
let obj = {}

for (let key in students) {
    if (students[key][0] >=6 && students[key][1] >= 70) obj[key] = [students[key][0], students[key][1]]
}

console.log(obj)