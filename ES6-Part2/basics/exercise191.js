/**
 * Write a JavaScript program to check if the provided integer is a prime number or is not.
 */

// w3resource sol
function isPrime(num) {
    const boundary = Math.floor(Math.sqrt(num));
    for(var i=2; i<=boundary; i++) {
        if(num%i === 0) return false;
    }

    return num >= 2;
}

console.log(isPrime(11)); // true (11 is a prime number)
console.log(isPrime(17)); // true (17 is a prime number)
console.log(isPrime(8)); // false (8 is not a prime number)