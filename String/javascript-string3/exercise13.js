/**
 * 
 * Write a JavaScript function to concatenates a given string n times (default is 1).
 * Test Data :
 * console.log(repeat('Ha!'));
 * console.log(repeat('Ha!',2));
 * console.log(repeat('Ha!',3));
 * "Ha!"
 * "Ha!Ha!"
 * "Ha!Ha!Ha!"
 */

// my solution
function repeat(str, times=1) {
    return str.repeat(times)
}

console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));

// or

function repeat2(str, times=1) {
    return new Array(times+1).join(str)
}

console.log(repeat2('Ha!'));
console.log(repeat2('Ha!',2));
console.log(repeat2('Ha!',3));