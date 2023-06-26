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

// my solution
let obj1 = {
    1: 'red', 
    2: 'green', 
    3: 'black', 
    4: 'white', 
    5: 'black'
}

let obj2 = {
    '1': 'Austin Little', 
    '2': 'Natasha Howard', 
    '3': 'Alfred Mullins', 
    '4': 'Jamie Rowe'
}

let obj3 = {}
let obj4 = {}

for (let key in obj1) {
    obj3[obj1[key]] = obj1[key].length
}
console.log(obj3)

for (let key in obj2) {
    obj4[obj2[key]] = obj2[key].length
}
console.log(obj4)