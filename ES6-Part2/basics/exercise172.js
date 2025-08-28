/**
 * Write a JavaScript program to create a function that invokes the provided function 
 * with its arguments transformed.
 */

// my sol
function fn(num1, num2) {
    let square = Math.pow(num1, 2);
    let double = num2 * 2;

    return [square, double];
}

console.log(fn(9, 3)); // [81, 6]
console.log(fn(5, 2)); // [25, 4]