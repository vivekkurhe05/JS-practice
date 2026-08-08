/**
 * Write a Python program to find the first maximum number of characters in a given string.
 */

function get_max_occuring_char(str) {
    const obj = {};
    for(let chr of str) {
        let index = str.indexOf(chr);
        let count = 0;
        while(index !== -1) {
            count++;
            index = str.indexOf(chr, index+1);
            obj[chr] = count;
        }
    }

    return Object.entries(obj).sort((a,b) => b[1] - a[1])[0][0]
}

console.log(get_max_occuring_char("Python: Get file creation and modification date/times"))
console.log(get_max_occuring_char("abcdefghijkb"))