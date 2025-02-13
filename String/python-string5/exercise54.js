/**
 * Write a Python program to find the first repeated character in a
given string where the index of the first occurrence is smallest.
 */

// my sol
function first_repeated_char_smallest_index(str) {
    let arr = []
    for(let i=0;i<str.length;i++) {
        if(arr.includes(str[i])) return `${str[i]}: ${str.indexOf(str[i])}`
        else arr.push(str[i])
    }
}

console.log(first_repeated_char_smallest_index("abcabc"))
console.log(first_repeated_char_smallest_index("abcb"))
console.log(first_repeated_char_smallest_index("abcc"))
console.log(first_repeated_char_smallest_index("abcxxy"))
console.log(first_repeated_char_smallest_index("abc"))