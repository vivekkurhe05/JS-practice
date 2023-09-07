/**
 * Write a Python program to check whether a given string contains a capital letter,
a lower case letter, a number and a minimum length.
Sample Output:
Input the string: W3resource
['Valid string.']
 */

// my solution
function is_criteria_matched(str) {
    let message = ""   

    let containsUpperCase = function(str) {
        let re = /[A-Z]/g
        return re.test(str)
    }

    let containsLowerCase = function(str) {
        let re = /[a-z]/g
        return re.test(str)
    }

    let containsDigit = function(str) {
        let re = /\d/g
        return re.test(str)
    }

    if(!containsUpperCase(str)) message= "String should have at least 1 uppercase letter"
    else if(!containsLowerCase(str)) message= "String should have at least 1 lowercase letter"
    else if(!containsDigit(str)) message= "String should have at least 1 digit"
    else if(str.length < 8) message= "String length should be at least 8"
    else message= "['Valid string.']"
    return message
}

console.log(is_criteria_matched("W3resource"))
console.log(is_criteria_matched("w3resource"))
console.log(is_criteria_matched("W3RESOURCE"))
console.log(is_criteria_matched("Wresource"))
console.log(is_criteria_matched("W3resou"))