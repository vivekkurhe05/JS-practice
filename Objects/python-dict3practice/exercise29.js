/**
 * Write a Python program to remove spaces from dictionary keys.
 */

// my solution
let student_list = {
    'S  001': ['Math', 'Science'], 
    'S    002': ['Math', 'English']
}

let newObj = {}
for(let key in student_list) {
    val =student_list[key]
    key = key.replace(/\s+/g,"")
    newObj[key] = val
    
}
console.log(newObj)