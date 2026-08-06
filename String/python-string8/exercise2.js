/**
 * Write a Python program to count the number of characters (character frequency) in a string.
Sample String : google.com'
Expected Result : {'g': 2, 'o': 3, 'l': 1, 'e': 1, '.': 1, 'c': 1, 'm': 1}
 */

function countCharacters(str) {
    const obj = {};
    for(let chr of str) {
        let count=0;
        let index = str.indexOf(chr);
        while(index!==-1) {
            count++;
            index = str.indexOf(chr, index+1)
            obj[chr] = count;
        }

    }
    return obj;
}

console.log(countCharacters('google.com'))