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
let arr = [{'x': '10', 'y': '20', 'z': '30'}, {'p': '40', 'q': '50', 'r': '60'}]
arr.map(obj => {
    for(let key in obj){
        if(typeof obj[key] === 'string'){
            obj[key] = parseInt(obj[key])
        }
    }
    return obj
})

console.log(arr)

let arr2 = [{'x': '10.12', 'y': '20.23', 'z': '30'}, {'p': '40.00', 'q': '50.19', 'r': '60.99'}]
arr2.map(obj => {
    for(let key in obj){
        if(typeof obj[key] === 'string'){
            obj[key] = parseFloat(obj[key])
        }
    }
    return obj
})

console.log(arr2)