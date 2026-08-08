/**
 * Write a Python program to find the first repeated character in a
given string where the index of the first occurrence is smallest.
 */

function first_repeated_char_smallest_index(str) {
    const obj = {};
    let arr = [];
    for(let chr of str) {
        if(!(chr in obj)) {
            obj[chr] = false;
        }else {
            obj[chr] = true;
        }
    }

    for(let key in obj) {
        if(obj[key] === true) return key;
    }

    return undefined;
}

console.log(first_repeated_char_smallest_index("abcabc"))
console.log(first_repeated_char_smallest_index("abcb"))
console.log(first_repeated_char_smallest_index("abcc"))
console.log(first_repeated_char_smallest_index("abcxxy"))
console.log(first_repeated_char_smallest_index("abc"))