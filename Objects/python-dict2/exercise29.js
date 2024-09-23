/**
 * Write a Python program to remove spaces from dictionary keys.
 */

// my solution
let student_list = {
    'S  001': ['Math', 'Science'], 
    'S    002': ['Math', 'English']
}

let new_list = {}
const re = /\s+/g
for(let key in student_list){
    new_list[key.replace(re,"")] = student_list[key]
}
console.log(new_list)