/**
 * Write a JavaScript program to get the sum of the powers of all the numbers from start to end (both inclusive).
 */

// my sol
function sumPower(num, power=2, startFrom=1) {
    let sum = 0;
    for(let i=startFrom; i<=num; i++) {
        sum += Math.pow(i, power);
    }
    return sum;
}

console.log(sumPower(10)); // Output: 385 (1^2 + 2^2 + ... + 10^2)
console.log(sumPower(10, 3)); // Output: 3025 (1^3 + 2^3 + ... + 10^3)
console.log(sumPower(10, 3, 5)); // Output: 2925 (5^3 + 6^3 + ... + 10^3)