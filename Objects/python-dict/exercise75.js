/**
 * Write a Python program to find all keys in a dictionary that have the given value.
Sample Output:
Original dictionary elements:
{'Theodore': 19, 'Roxanne': 20, 'Mathew': 21, 'Betty': 20}
Find all keys in the said dictionary that have the specified value:
['Roxanne', 'Betty']
 */

// my solution
function give_keys(obj, value) {
    let arr = []

    for (let key in obj) {
        if (obj[key] === value) {
            arr.push(key)
        }
    }

    return arr
}

let obj = {
    'Theodore': 19, 
    'Roxanne': 20, 
    'Mathew': 21, 
    'Betty': 20
}


console.log(give_keys(obj, 20))