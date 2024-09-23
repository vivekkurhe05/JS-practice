/**
 *  Write a Python program to drop empty items from a given dictionary.
Original Dictionary:
{'c1': 'Red', 'c2': 'Green', 'c3': None}
New Dictionary after dropping empty items:
{'c1': 'Red', 'c2': 'Green'}
 */

// my solution
let obj1 = {'c1': 'Red', 'c2': 'Green', 'c3': null}

for(let prop in obj1){
    if(obj1[prop] === null) delete obj1[prop]
}
console.log(obj1)