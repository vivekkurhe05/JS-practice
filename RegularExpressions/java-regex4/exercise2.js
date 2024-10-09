/**
 * Write a Java program that matches a string that has a p followed by zero or more q's.
 */

// my solution
function validate(str) {
    const re = /pq*$/g
    return re.test(str)
}

console.log(validate("p")); // true
console.log(validate("pq")); // true
console.log(validate("pqq")); // true
console.log(validate("pqr")); // false
console.log(validate("prr")); // false