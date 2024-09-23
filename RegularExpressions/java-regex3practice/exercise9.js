/**
 * Write a Java program where a string starts with a specific number.
 */

// my solution
function validate(str) {
    const re = /^5.[0-9]+/g
    return re.test(str)
}

console.log(validate("5-2345861")); // true
console.log(validate("6-2345861")); // false
console.log(validate("6-5555861")); // false