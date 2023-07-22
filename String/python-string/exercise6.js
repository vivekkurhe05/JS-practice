/**
Write a Python program to add 'ing' at the end of a given string (length should be at least 3).
If the given string already ends with 'ing', add 'ly' instead.
If the string length of the given string is less than 3, leave it unchanged.
Sample String : 'abc'
Expected Result : 'abcing'
Sample String : 'string'
Expected Result : 'stringly'
 */

function add_string(str) {
    let updated_str = ""
    
    if(str.length <= 3) return str
    else if (str.length > 3 && str.endsWith("ing")) {
        updated_str += str.substring(0, str.indexOf("ing")) + "ly"
    }

    return updated_str
}

console.log(add_string("abc"))
console.log(add_string("abcing"))
console.log(add_string("string"))
console.log(add_string("ab"))