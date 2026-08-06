/**
 * Write a Python program to count occurrences of a substring in a string.
 */

function count_occurrences(str) {

    let obj = {};
    for(let chr of str) {
        let index = str.indexOf(chr);
        let count = 0;
        while(index !=-1) {
            count++;
            index = str.indexOf(chr, index+1);
            obj[chr] = count;
        }
    }

    return obj;
 
}

console.log(count_occurrences("foxes"))