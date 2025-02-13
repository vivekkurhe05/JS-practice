/**
 * Write a Python program to check whether a given string contains a capital letter,
a lower case letter, a number and a minimum length.
Sample Output:
Input the string: W3resource
['Valid string.']
 */

// my sol
function is_criteria_matched(str) {
    let msg = ""

    let containsUpperCase = function(str) {
        const re = /[A-Z]/g
        return re.test(str)
    }

    let containsLowerCase = function(str) {
        const re = /[a-z]/g
        return re.test(str)
    }

    let containsDigit = function(str) {
        const re = /\d/g
        return re.test(str)
    }

    if(!containsUpperCase(str)) msg = "String should have at least 1 uppercase letter"
    else if(!containsLowerCase(str)) msg = "String should have at least 1 lowercase letter"
    else if(!containsDigit(str)) msg = "String should have at least 1 digit"
    else if (str.length<10) msg = "string length should be 10"
    else msg = "['Valid string.']"

    return msg
}


console.log(is_criteria_matched("W3resource"))
console.log(is_criteria_matched("w3resource"))
console.log(is_criteria_matched("W3RESOURCE"))
console.log(is_criteria_matched("Wresource"))
console.log(is_criteria_matched("W3resou"))