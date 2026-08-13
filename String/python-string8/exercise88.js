/**
 * Write a Python program to check whether a given string contains a capital letter,
a lower case letter, a number and a minimum length.
Sample Output:
Input the string: W3resource
['Valid string.']
 */

function is_criteria_matched(str) {

    const hasUpperCase = function(str) {
        for(let chr of str) {
            if(chr >= 'A' && chr <= 'Z') {
                return true;
            }
        }
        return false;
    }

    const hasLowerCase = function(str) {
        for(let chr of str) {
            if(chr >= 'a' && chr <= 'z') {
                return true;
            }
        }
        return false;
    }

    const hasNumber = function(str) {
        for(let chr of str) {
            if(!isNaN(chr)) {
                return true;
            }
        }
        return false;
    }

    const hasMinimumLength = function(str) {
        return str.length >= 10 ? true : false;
    }

    return hasUpperCase(str) && hasLowerCase(str) && hasNumber(str) && hasMinimumLength(str);
}

console.log(is_criteria_matched("W3resource")) // valid string
console.log(is_criteria_matched("w3resource")) // invalid string
console.log(is_criteria_matched("W3RESOURCE")) // invalid string
console.log(is_criteria_matched("Wresource")) // invalid string
console.log(is_criteria_matched("W3resou")) // invalid string