/**
 * Write a Python program that takes a string with some words. For two consecutive words in the said string, check whether the first word ends with a vowel and the next word begins with a vowel. If the program satisfy the said condition, return true other false. Only one space is allowed between the words.
 */

// my solution
function test_vowels(str) {
    const re = /\w*[aeiou]\s[aeiou]\w*/gi;
    return re.test(str);
}

console.log(test_vowels("These exercises can be used for practice."));
console.log(test_vowels("Following exercises should be removed for practice."));
console.log(test_vowels("I use these stories in my classroom."));