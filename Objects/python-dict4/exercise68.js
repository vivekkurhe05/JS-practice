/**
 * Write a Python program to combine two or more dictionaries, creating a list of values for each key.
Sample Output:
Original dictionaries:
{'w': 50, 'x': 100, 'y': 'Green', 'z': 400}
{'x': 300, 'y': 'Red', 'z': 600}
Combined dictionaries, creating a list of values for each key:
{'w': [50], 'x': [100, 300], 'y': ['Green', 'Red'], 'z': [400, 600]}
 */

// my solution
let list1 = {'w': 50, 'x': 100, 'y': 'Green', 'z': 400}
let list2 = {'x': 300, 'y': 'Red', 'z': 600}
let list3 = {}

for(let key in list1) {
    let arr = []
    arr.push(list1[key])
    list3[key] = arr
}

for(let key in list2) {
    if(key in list3) {
        list3[key].push(list2[key])
    }
}
console.log(list3)