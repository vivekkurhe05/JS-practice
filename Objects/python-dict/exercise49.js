/**
 * Write a Python program to convert string values of a given dictionary into integer/float datatypes.
Original list:
[{'x': '10', 'y': '20', 'z': '30'}, {'p': '40', 'q': '50', 'r': '60'}]
String values of a given dictionary, into integer types:
[{'x': 10, 'y': 20, 'z': 30}, {'p': 40, 'q': 50, 'r': 60}]
Original list:
[{'x': '10.12', 'y': '20.23', 'z': '30'}, {'p': '40.00', 'q': '50.19', 'r': '60.99'}]
String values of a given dictionary, into float types:
[{'x': 10.12, 'y': 20.23, 'z': 30.0}, {'p': 40.0, 'q': 50.19, 'r': 60.99}]
 */

// my solution
let arr1 = [
    {'x': '10', 'y': '20', 'z': '30'}, 
    {'p': '40', 'q': '50', 'r': '60'}
]

let arr2 = [
    {'x': '10.12', 'y': '20.23', 'z': '30'}, 
    {'p': '40.00', 'q': '50.19', 'r': '60.99'}
]

console.log(arr1)
arr1=arr1.map(obj => {
    for(let key in obj) {
        obj[key]=parseInt(obj[key])
    }
    return obj
})

console.log(arr1)

console.log(arr2)
arr2=arr2.map(obj => {
    for(let key in obj) {
        obj[key]=parseFloat(obj[key])
    }
    return obj
})

console.log(arr2)