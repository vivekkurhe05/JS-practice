/**
 * Write a Python program to count the number of characters (character frequency) in a string.
Sample String : google.com'
Expected Result : {'g': 2, 'o': 3, 'l': 1, 'e': 1, '.': 1, 'c': 1, 'm': 1}
 */

function countCharacters(str) {

    let obj = {};

    for(let chr of str) {

        let index = str.indexOf(chr);
        let count = 0;
    
        while(index != -1) {
            count++;
            index = str.indexOf(chr, index+1);
            obj[chr] = count;
        }
    }

    return obj;
}

console.log(countCharacters('google.com'))