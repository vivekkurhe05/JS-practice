/**
 * Write a Python program to match key values in two dictionaries.
 */

// my solution
// work on this
let x = {'key1': 1, 'key2': 3, 'key3': 2}
let y = {'key1': 1, 'key2': 2}

for(let yKey in y){
    for(let xKey in x) {
        if(xKey in y && x[xKey] === y[yKey]){
            console.log(`${xKey}: ${x[xKey]} is present in both x and y`)
        }
    }
}