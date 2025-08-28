/**
 * Write a JavaScript program to get removed elements of an given array 
 * until the passed function returns true.
 */

// my sol
function takeWhile(arr, fn) {
    return arr.reduce((acc, cur) => {
        if(!fn(cur)) {
            acc.push(cur);
        }
        return acc;
    }, [])
}

console.log(takeWhile([1, 2, 3, 4], n => n >= 3)); // Output: [1, 2]