/**
 * Write a Python program to check whether a list contains a sublist.
 */

// my solution
function is_Sublist(list, sublist) {
    return list.lastIndexOf(sublist[1]) - list.indexOf(sublist[0]) === 1
}

let a = [2,4,3,5,7]
let b = [4,3]
let c = [3,7]
console.log(is_Sublist(a, b)) // true
console.log(is_Sublist(a, c)) // false