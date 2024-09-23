/**
 * Write a Python program to check if a dictionary is empty or not.
 */

// my solution
function isEmpty(obj){
    let size = 0
    for(let key in obj){
        if(obj.hasOwnProperty(key)) return false
    }
    return true
}

console.log(isEmpty({}))
console.log(isEmpty({"name":"Vivek"}))

