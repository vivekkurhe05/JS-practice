/**
 * Write a Python program to invert a given dictionary with non-unique hashable values.
 */

// work on this
function test(obj) {
    let obj2 = {}
    let arr = []
    for (let key in obj) {
        arr.push(key)
        obj2[obj[key]] = arr
    }
    return obj2
}

let students = {
    'Ora Mckinney': 8,
    'Theodore Hollandl': 7,
    'Mae Fleming': 7,
    'Mathew Gilbert': 8,
    'Ivan Little': 7,  
}

console.log(test(students))