/**
 *  Write a Python program to drop empty items from a given dictionary.
Original Dictionary:
{'c1': 'Red', 'c2': 'Green', 'c3': None}
New Dictionary after dropping empty items:
{'c1': 'Red', 'c2': 'Green'}
 */

// my solution
let obj = {'c1': 'Red', 'c2': 'Green', 'c3': null}
for(let key in obj){
    if(obj[key] === null) delete obj[key]
}
console.log(obj)