/**
 * Write a Python program to check if each number is prime in a given list of numbers. 
 * Return True if all numbers are prime otherwise False.
 * ([0, 3, 4, 7, 9]) -> False
([3, 5, 7, 13]) -> True
([1, 5, 3]) -> False
 */

function isPrime(arr) {
    return arr.every(num => num%1 === 0 && num%num === 0)
}

console.log(isPrime([0, 3, 4, 7, 9]))
console.log(isPrime([3, 5, 7, 13]))
console.log(isPrime([1, 5, 3]))