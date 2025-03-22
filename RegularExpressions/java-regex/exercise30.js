/**
 * Write a Java program to insert a dash (-) between an upper case
 * letter and a lower case letter in a given string.
 */

// my solution
function validate(str) {
    const re = /[A-Z](?=[a-z])/g;
    return str.replace(re, function(chr) {
        return chr + "-"
    })
}

console.log(validate("Python Exercises")); // P-ython E-xercises
console.log(validate("The quick brown Fox jumps over the lazy Dog.")); // T-he quick brown F-ox jumps over the lazy D-og.
console.log(validate("java exercises")); // java exercises

// or

function validate2(str) {
    const re = /(?<=[A-Z])(?=[a-z])/g;
    return str.replace(re,"-");
}

console.log(validate2("Python Exercises")); // P-ython E-xercises
console.log(validate2("The quick brown Fox jumps over the lazy Dog.")); // T-he quick brown F-ox jumps over the lazy D-og.
console.log(validate2("java exercises")); // java exercises