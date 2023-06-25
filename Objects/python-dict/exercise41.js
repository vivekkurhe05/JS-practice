/**
 *  Write a Python program to drop empty items from a given dictionary.
Original Dictionary:
{'c1': 'Red', 'c2': 'Green', 'c3': None}
New Dictionary after dropping empty items:
{'c1': 'Red', 'c2': 'Green'}
 */

// my solution
let obj1 = {'c1': 'Red', 'c2': 'Green', 'c3': null}
let obj2 = {}

for(let key in obj1) {
    if(obj1[key] === null) {
        delete obj1.key
    }else {
        obj2[key] = obj1[key]
    }
}

console.log(obj2)