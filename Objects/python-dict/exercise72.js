/**
 * Write a Python program to invert a dictionary with unique hashable values.
Sample Output:
{10: 'Theodore', 11: 'Mathew', 9: 'Roxanne'}
 */

// my solution
let obj = {
    10: 'Theodore', 
    11: 'Mathew', 
    9: 'Roxanne'
}

let obj2 = {}
for (let key in obj) {

    obj2[obj[key]] = key
}

console.log(obj2)