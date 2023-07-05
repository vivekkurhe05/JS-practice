/**
 * Write a Python program that creates key-value list pairings within a dictionary.
Original dictionary:
{
    1: ['Jean Castro'], 
    2: ['Lula Powell'], 
    3: ['Brian Howell'], 
    4: ['Lynne Foster'], 
    5: ['Zachary Simon']
}
A key-value list pairings of the said dictionary:
[
    {
        1: 'Jean Castro', 
        2: 'Lula Powell', 
        3: 'Brian Howell', 
        4: 'Lynne Foster', 
        5: 'Zachary Simon'
    }
]
 */

// my solution
let obj = {
    1: ['Jean Castro'], 
    2: ['Lula Powell'], 
    3: ['Brian Howell'], 
    4: ['Lynne Foster'], 
    5: ['Zachary Simon']
}

let obj2 = {}
let arr = []
for (let key in obj) {
    obj2[key] = obj[key][0]
}
arr.push(obj2)
console.log(arr)