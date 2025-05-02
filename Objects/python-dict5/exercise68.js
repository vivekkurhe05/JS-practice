/**
 * Write a Python program to combine two or more dictionaries, creating a list of values for each key.
Sample Output:
Original dictionaries:
{'w': 50, 'x': 100, 'y': 'Green', 'z': 400}
{'x': 300, 'y': 'Red', 'z': 600}
Combined dictionaries, creating a list of values for each key:
{'w': [50], 'x': [100, 300], 'y': ['Green', 'Red'], 'z': [400, 600]}
 */

let obj1 = {'w': 50, 'x': 100, 'y': 'Green', 'z': 400};
let obj2 = {'x': 300, 'y': 'Red', 'z': 600};
let obj3 = {};

for(let key in obj1) {
    if(!(key in obj3)) {
        obj3[key] = [obj1[key]];
    }
}

for(let key in obj2) {
    if(key in obj3) {
        obj3[key].push(obj2[key])
        obj3[key] = obj3[key];
    }
}

console.log(obj3);