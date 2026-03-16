/**
 * Write a Python program to check whether a given string contains a capital letter,
a lower case letter, a number and a minimum length.
Sample Output:
Input the string: W3resource
['Valid string.']
 */

function is_criteria_matched(str) {

    const hasUpperCase = function(input) {
        for(let i=0; i<input.length; i++) {
            if(input[i] >= 'A' && input[i] <= 'Z'){
                return true;
            }
        }
        return false;
    }

    const hasLowerCase = function(input) {
        for(let i=0;i<input.length;i++) {
            if(input[i] >= 'a' && input[i] <= 'z') {
                return true;
            }
        }

        return false;
    }

    const hasNumber = function(input) {
        for(let i=0;i<input.length;i++) {
            if(input[i] >= '0' && input[i] <= '9') {
                return true;
            }
        }

        return false;
    }

    const hasMinimumLength = function(input) {
        return input.length >= 10 ? true : false;
    }

    return (hasUpperCase(str) && hasLowerCase(str) && hasNumber(str) && hasMinimumLength(str)) ? "Valid string" : "Invalid string";
}

console.log(is_criteria_matched("W3resource")) // valid string
console.log(is_criteria_matched("w3resource")) // invalid string
console.log(is_criteria_matched("W3RESOURCE")) // invalid string
console.log(is_criteria_matched("Wresource")) // invalid string
console.log(is_criteria_matched("W3resou")) // invalid string