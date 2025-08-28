/**
 * Write a JavaScript program to get removed elements from the end of a given array 
 * until the passed function returns true.
 */

// my sol
function takeRightWhile(arr, fn) {
    return arr.reduce((acc, cur) => {
        if(!fn(cur)) {
            acc.push(cur);
        }
        return acc;
    }, []);
}

console.log(takeRightWhile([1, 2, 3, 4], n => n < 3)); // Output: [3, 4]