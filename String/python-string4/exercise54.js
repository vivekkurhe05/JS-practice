/**
 * Write a Python program to find the first repeated character in a
given string where the index of the first occurrence is smallest.
 */

// my sol
function first_repeated_char_smallest_index(str) {
    let obj = {}
    for(let i=0;i<str.length;i++) {
        if(!(str[i] in obj)){
            obj[str[i]] = false
        }else{
            obj[str[i]] = true
            break
        }
    }
    for(let key in obj) {
        if(obj[key]){
            return key
        }
    }
}

console.log(first_repeated_char_smallest_index("abcabc")) // a
console.log(first_repeated_char_smallest_index("abcb")) // b
console.log(first_repeated_char_smallest_index("abcc")) // c
console.log(first_repeated_char_smallest_index("abcxxy")) //x
console.log(first_repeated_char_smallest_index("abcca")) // c
console.log(first_repeated_char_smallest_index("abc")) // undefined