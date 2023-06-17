/**
 * Write a Python program that checks whether a word starts and ends with a vowel in a given string. Return true if a word matches the condition; otherwise, return false.
Sample Data:
("Red Orange White") -> True
("Red White Black") -> False
("abcd dkise eosksu") -> True
 */

// my solution
function test(str) {
    const re = /\b[aeiou]\w+[aeiou]\b/gi;
    return re.test(str);
}

console.log(test("Red Orange White"));
console.log(test("Red White Black"));
console.log(test("abcd dkise eosksu"));