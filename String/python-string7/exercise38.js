/**
 * Write a Python program to count occurrences of a substring in a string.
 */

function count_occurrences(str) {

    const obj = {};
    for(let i=0; i<str.length; i++) {
        let index = str.indexOf(str[i], 0);
        let count = 0;
        while(index != -1) {
            count++;
            index = str.indexOf(str[i], index+1);
            obj[str[i]] = count;
        }
    }

    return obj;
}

console.log(count_occurrences("foxes"))