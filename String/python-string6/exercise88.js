/**
 * Write a Python program to check whether a given string contains a capital letter,
a lower case letter, a number and a minimum length.
Sample Output:
Input the string: W3resource
['Valid string.']
 */

function is_criteria_matched(str) {

    if(str.length < 8) return 'Invalid string';

    hasNumber = function (str) {
        
    };

    hasUpperCaseLetter = function (str) {

    };

    hasLowerCaseLetter = function (str) {

    };



}

console.log(is_criteria_matched("W3resource")) // valid string
console.log(is_criteria_matched("w3resource")) // invalid string
console.log(is_criteria_matched("W3RESOURCE")) // invalid string
console.log(is_criteria_matched("Wresource")) // invalid string
console.log(is_criteria_matched("W3resou")) // invalid string