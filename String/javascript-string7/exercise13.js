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

function repeat(input, num=1) {
    return input.repeat(num)
}

console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));

// or

function repeat2(input, num=1) {
    return new Array(num+1).join(input);
}

console.log(repeat2('Ha!'));
console.log(repeat2('Ha!',2));
console.log(repeat2('Ha!',3));