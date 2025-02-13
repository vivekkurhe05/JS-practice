/**
Write a Python program to add 'ing' at the end of a given string (length should be at least 3).
If the given string already ends with 'ing', add 'ly' instead.
If the string length of the given string is less than 3, leave it unchanged.
Sample String : 'abc'
Expected Result : 'abcing'
Sample String : 'string'
Expected Result : 'stringly'
 */

// my sol
function add_string(str) {
    let result=""
    if(str.length >=3){
        result=str+"ing"
    }
    if(str.lastIndexOf("ing") === str.length-3) {
        result = str.substring(0,str.lastIndexOf("ing"))+"ly"
    }
    if(str.length<3) result=str
    return result
}

console.log(add_string("abc"))
console.log(add_string("abcing"))
console.log(add_string("string"))
console.log(add_string("ab"))