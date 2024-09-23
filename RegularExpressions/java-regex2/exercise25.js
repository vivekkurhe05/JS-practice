/**
 * Write a Java program to get last n vowels of a given string.
 */

// my solution
function validate(str, num){
    const re = /[aeiou]/gi
    let arr = str.match(re)
    return arr.slice(arr.length-num)
}

console.log(validate("Java", 2));
console.log(validate("JavaScript", 2));
console.log(validate("JavaScript", 3));
console.log(validate("SQLite", 2));
console.log(validate("The quick brown fox jumps over the lazy dog.", 2));
console.log(validate("The quick brown fox jumps over the lazy dog.", 3));
console.log(validate("The quick brown fox jumps over the lazy dog.", 15));