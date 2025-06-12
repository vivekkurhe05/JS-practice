/**
 * Write a JavaScript program to group the elements of a given array based on the given function.
 */

// chatgpt sol
function group_By(arr, fn) {
    return arr.reduce((acc, cur) => {

        // determine the key based on function or property name
        let key;
        if(typeof fn === 'function') {
            key = fn(cur);
        }else if(typeof fn  === 'string') {
            key = cur[fn];
        }
        
        // use the key to group items
        key = String(key); // convert key to string to use as object property
        if(!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(cur);

        return acc;

    }, {});
}

// Test cases
console.log(group_By([6.1, 4.2, 6.3], Math.sqrt)); // Output: { '2.463751439371663': [ 6.1, 6.3 ], '2.04939015319192': [ 4.2 ] }
console.log(group_By([6.1, 4.2, 6.3], Math.floor)); // Output: { '6': [ 6.1, 6.3 ], '4': [ 4.2 ] }
console.log(group_By(['one', 'two', 'three'], 'length')); // Output: { '3': [ 'one', 'two' ], '5': [ 'three' ] }