/**
 * Write a Python program to create a dictionary with the same keys as the given dictionary 
 * and values generated by running the given function for each value.
Sample Output:
Original dictionary elements:
{'Theodore': {'user': 'Theodore', 'age': 45}, 'Roxanne': {'user': 'Roxanne', 'age': 15}, 'Mathew': {'user': 'Mathew', 'age': 21}}
Dictionary with the same keys:
{'Theodore': 45, 'Roxanne': 15, 'Mathew': 21}
 */

const obj = {
    'Theodore': {'user': 'Theodore', 'age': 45}, 
    'Roxanne': {'user': 'Roxanne', 'age': 15}, 
    'Mathew': {'user': 'Mathew', 'age': 21}
};

const newObj = {};

for(let key in obj) {
    newObj[key] = obj[key].age;
}

console.log(newObj);