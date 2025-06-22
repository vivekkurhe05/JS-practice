/**
 * Write a JavaScript program to return the object associating the properties to the values 
 * of a given array of valid property identifiers and an array of values.
 */

// my sol
function zipObject(keys, values) {

    return keys.reduce((acc, cur, i) => {
        acc[cur] = values[i];
        for(let key in acc) {
            if(!acc[key]) {
                delete acc[key];
            }
        }
        return acc;
    }, {});
}

console.log(zipObject(['a', 'b', 'c'], [1, 2])); // {"a":1,"b":2}
console.log(zipObject(['a', 'b'], [1, 2, 3]));   // {"a":1,"b":2}