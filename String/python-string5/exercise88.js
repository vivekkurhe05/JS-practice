/**
 * Write a Python program to check whether a given string contains a capital letter,
a lower case letter, a number and a minimum length.
Sample Output:
Input the string: W3resource
['Valid string.']
 */

// my solution
function is_criteria_matched(str) {
    let hasUpperCase = function(str) {
        return str.split("").some((chr) => chr>='A' && chr<='Z')
    }
    let hasLowerCase = function(str) {
        return str.split("").some((chr) => chr>='a' && chr<='z')
    }
    let hasNumber = function(str) {
        for(let i=0;i<str.length;i++) {
            if(!isNaN(str[i])) return true
        }
        return false
    }
    let hasMinimumLength = function(str) {
        return str.length >= 10
    }

    if(hasUpperCase(str) && hasLowerCase(str) && hasNumber(str) && hasMinimumLength(str)) {
        return "['Valid string']"
    }else{
        return "['Invalid string']"
    }
}

console.log(is_criteria_matched("W3resource")) // valid string
console.log(is_criteria_matched("w3resource")) // invalid string
console.log(is_criteria_matched("W3RESOURCE")) // invalid string
console.log(is_criteria_matched("Wresource")) // invalid string
console.log(is_criteria_matched("W3resou")) // invalid string