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

function repeat(str, numOfTimes) {
    if(numOfTimes === undefined) return str
    return str.repeat(numOfTimes)
}

console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));