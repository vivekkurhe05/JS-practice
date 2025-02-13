/**
 * Write a Python program to find the first non-repeating character in a given string.
 */

// my sol
function first_non_repeating_character(str) {
    let obj = {}
    let arr = []
    for(let i=0;i<str.length;i++) {
        if(!(str[i] in obj)) {
            obj[str[i]] = true
        }else{
            obj[str[i]] = false
        }
    }
    for(let key in obj) {
        if(obj[key]) arr.push(key)
    }
    return arr[0] || "Not found"
}

console.log(first_non_repeating_character('abcdef')) // a
console.log(first_non_repeating_character('abcabcdef')) // d
console.log(first_non_repeating_character('aabbcc')) // undefined