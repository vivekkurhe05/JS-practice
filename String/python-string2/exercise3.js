/**
 *
Write a Python program to get a string made of the first 2 and last 2 characters of a given string.
If the string length is less than 2, return the empty string instead.
Sample String : 'w3resource'
Expected Result : 'w3ce'
Sample String : 'w3'
Expected Result : 'w3w3'
Sample String : ' w'
Expected Result : Empty String
 */

// my solution
function makeString(str) {
    if(str.length < 2) return "Empty String"
    else {
        return str.slice(0,2)+str.slice(str.length-2)
    }
}

console.log(makeString("w3resource"))
console.log(makeString(("w3")))
console.log(makeString(("w")))
console.log(makeString(("")))