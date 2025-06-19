/**
 * Write a JavaScript program to execute a provided function once for each array element, 
 * starting with the array's last element.
 */

// w3resource sol
function forEachRight(arr, fn) {
    return arr.reverse().forEach(fn);
}

forEachRight([1, 2, 3, 4], val => console.log(val)); // Outputs: 4, 3, 2, 1