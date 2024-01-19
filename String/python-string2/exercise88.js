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
        let regex = /[A-Z]/g
        return regex.test(str)
    }

    let containsLowerCase = function(str) {
        let regex = /[a-z]/g
        return regex.test(str)
    }

    let containsNumber = function(str) {
        let regex = /\d/g
        return regex.test(str)
    }

    if(!containsUpperCase(str)) message = "String should contain atleast 1 capital letter"
    else if(!containsLowerCase(str)) message = "String should contain atleast 1 lower case letter"
    else if(!containsNumber(str)) message = "String should contain atleast 1 number"
    else if(str.length < 8) message = "String length should be atleast 8"
    else message = "['Valid string.']"

    return message

}

console.log(is_criteria_matched("W3resource"))
console.log(is_criteria_matched("w3resource"))
console.log(is_criteria_matched("W3RESOURCE"))
console.log(is_criteria_matched("Wresource"))
console.log(is_criteria_matched("W3resou"))