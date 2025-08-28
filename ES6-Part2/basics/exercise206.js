/**
 * Write a JavaScript program to check if a given string is an anagram of another string 
 * (case-insensitive, ignores spaces, punctuation and special characters).
 */

// my sol
function isAnagram(str1, str2) {
    let normalize = function(str) {
        return str.replace(/[^A-Za-z]/gi, "").split("").sort().join("");
    }

    return normalize(str1) === normalize(str2);
}


console.log(isAnagram('iceman', 'cinema')); // true (both strings contain the same letters)
console.log(isAnagram('madam', 'madam')); // true (both strings are the same)
console.log(isAnagram('hello', 'hillo')); 