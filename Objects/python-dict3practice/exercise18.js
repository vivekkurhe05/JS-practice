/**
 * Write a Python program to check if a dictionary is empty or not.
 */

// my solution
function isEmpty(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            return true
        }
    }
    return false
}

console.log(isEmpty({}))
console.log(isEmpty({"name":"Vivek"}))