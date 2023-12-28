/**
 * Write a Python program to check whether all dictionaries in a list are empty or not.
Sample list : [{},{},{}]
Return value : True
Sample list : [{1,2},{},{}]
Return value : False
 */

// my solution
function isEmpty(arr) {
    return arr.every(obj => {
        for(let prop in obj) {
            if(obj.hasOwnProperty(prop)) return false
        }
        return true
    })
}

console.log(isEmpty([{},{},{}]))
console.log(isEmpty([{"1":2},{},{}]))