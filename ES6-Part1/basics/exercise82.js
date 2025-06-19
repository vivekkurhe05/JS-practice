/**
 * Write a JavaScript program to map array values to an object using a function. 
 * The key-value pairs consist of the original value as the key and the mapped value.
 */

// my sol
function squareIt(arr) {

    return arr.reduce((acc, cur) => {
        acc[cur] = cur*cur;
        return acc;
    }, {});
}

console.log(squareIt([1, 2, 3])); // Outputs: { '1': 1, '2': 4, '3': 9 }