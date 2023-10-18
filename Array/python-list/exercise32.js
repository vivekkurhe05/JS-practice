/**
 * Write a Python program to check whether a list contains a sublist.
 */

// fix this
function is_Sublist(arr1, arr2) {
    return arr2.every(el => arr1.includes(el))
}

let a = [2,4,3,5,7]
let b = [4,3]
let c = [3,7]
console.log(is_Sublist(a, b)) // true
console.log(is_Sublist(a, c)) // false