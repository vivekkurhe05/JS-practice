/**
 * Write a Python program to find the first repeated character in a
given string where the index of the first occurrence is smallest.
 */

function first_repeated_char_smallest_index(str) {
    for(let chr of str) {
        if(str.indexOf(chr) !== str.lastIndexOf(chr)) {
            return str.indexOf(chr);
        }
    }

    return undefined;
}

console.log(first_repeated_char_smallest_index("abcabc"))
console.log(first_repeated_char_smallest_index("abcb"))
console.log(first_repeated_char_smallest_index("abcc"))
console.log(first_repeated_char_smallest_index("abcxxy"))
console.log(first_repeated_char_smallest_index("abc"))