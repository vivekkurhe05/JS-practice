/**
 *  Write a Python program to drop empty items from a given dictionary.
Original Dictionary:
{'c1': 'Red', 'c2': 'Green', 'c3': null}
New Dictionary after dropping empty items:
{'c1': 'Red', 'c2': 'Green'}
 */

// my sol
const dict = {'c1': 'Red', 'c2': 'Green', 'c3': null}

for(let key in dict) {
    if(dict[key] === null){
        delete dict[key]
    }
}
console.log(dict)