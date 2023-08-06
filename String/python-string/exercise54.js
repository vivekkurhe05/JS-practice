/**
 * Write a Python program to find the first repeated character in a
given string where the index of the first occurrence is smallest.
 */

// my solution
function first_repeated_char_smallest_index(str) {

    let obj = {}
    for (let i=0; i<str.length; i++) {
        if(str[i] in obj) return [str[i], str.indexOf(str[i])]
        obj[str[i]] = 1
    }
}

console.log(first_repeated_char_smallest_index("abcabc"))
console.log(first_repeated_char_smallest_index("abcb"))
console.log(first_repeated_char_smallest_index("abcc"))
console.log(first_repeated_char_smallest_index("abcxxy"))
console.log(first_repeated_char_smallest_index("abc"))