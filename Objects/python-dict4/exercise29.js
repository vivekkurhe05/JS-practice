/**
 * Write a Python program to remove spaces from dictionary keys.
 */

// my solution
let student_list = {
    'S  001': ['Math', 'Science'], 
    'S    002': ['Math', 'English']
}
let new_student_list = {}

for(let key in student_list){
    new_student_list[key] = key.replace(/\s+/g,"")
    new_student_list[new_student_list[key]] = student_list[key]
    delete new_student_list[key]
    
}
console.log(new_student_list)