/**
 * Write a Python program to find the length of a dictionary of values.
Original Dictionary:
{1: 'red', 2: 'green', 3: 'black', 4: 'white', 5: 'black'}
Length of dictionary values:
{'red': 3, 'green': 5, 'black': 5, 'white': 5}
Original Dictionary:
{'1': 'Austin Little', '2': 'Natasha Howard', '3': 'Alfred Mullins', '4': 'Jamie Rowe'}
Length of dictionary values:
{'Austin Little': 13, 'Natasha Howard': 14, 'Alfred Mullins': 14, 'Jamie Rowe': 10}
 */

const obj = {1: 'red', 2: 'green', 3: 'black', 4: 'white', 5: 'black'};

const arr = Object.entries(obj);
const newObj = arr.reduce((acc, cur) => {
    if(!(cur[1] in acc)) {
        acc[cur[1]] = cur[1].length
    }
    return acc;
}, {})
console.log(newObj);

// or

const obj2 = {'1': 'Austin Little', '2': 'Natasha Howard', '3': 'Alfred Mullins', '4': 'Jamie Rowe'};
const arr2 = Object.entries(obj2);
const newObj2 = arr2.reduce((acc, cur) => {
    if(!(cur[1] in acc)) {
        acc[cur[1]] = cur[1].length;
    }
    return acc;
}, {});

console.log(newObj2);