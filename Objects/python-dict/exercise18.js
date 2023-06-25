/**
 * Write a Python program to check if a dictionary is empty or not.
 */

// my solution

function isEmpty(my_dict) {
    for (let key in my_dict){
        if(my_dict.hasOwnProperty(key)) {
            return false
        }
    }
    return true
}

console.log(isEmpty({}))
console.log(isEmpty({"name":"Vivek"}))

