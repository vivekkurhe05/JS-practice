/**
 * Write a Python program to check if a dictionary is empty or not.
 */

function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true
}

console.log(isEmpty({}))
console.log(isEmpty({"name":"Vivek"}))