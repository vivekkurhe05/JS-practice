/**
 * Write a Python program to find the first repeated character in a
given string where the index of the first occurrence is smallest.
 */

function first_repeated_char_smallest_index(str) {
    let arr = Array.from(str);
    let obj = {};

    for(let i=0; i<arr.length; i++) {
        if(!(arr[i] in obj)) {
            obj[arr[i]] = i
        }else{
            return [obj[arr[i]], arr[i]];
        }
    }
}

console.log(first_repeated_char_smallest_index("abcabc"))
console.log(first_repeated_char_smallest_index("abcb"))
console.log(first_repeated_char_smallest_index("abcc"))
console.log(first_repeated_char_smallest_index("abcxxy"))
console.log(first_repeated_char_smallest_index("abc"))