/**
 * Write a Python program to remove spaces from dictionary keys.
 */

// my solution
let student_list = {
    'S  001': ['Math', 'Science'], 
    'S    002': ['Math', 'English']
}

let obj={}
let re = /\s+(?=\w)/g
for (let key in student_list) {
    key2=key.replace(re,()=>"")
    obj[key2]=student_list[key]
}

console.log(obj)