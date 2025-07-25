/**
 * Write a JavaScript program to create an object with keys generated by running the provided function for each key. 
 * The object will have the same values as the provided object.
 */

// w3resource sol
function mapKeys(obj, fn) {

    return Object.keys(obj)
    .reduce((acc, cur) => {
        acc[fn(obj[cur], cur, obj)] = obj[cur];
        return acc;
    }, {});
}

console.log(mapKeys({ a: 1, b: 2 }, (val, key) => key + val)); // Outputs: { 'a1': 1, 'b2': 2 }