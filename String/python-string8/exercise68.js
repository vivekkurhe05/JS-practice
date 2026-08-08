/**
 * Write a Python program to generate two strings from a given string. For the first string,
use the characters that occur only once, and for the second,
use the characters that occur multiple times in the said string.
 */

function generate_strings(str) {
    const obj={};
    for(let chr of str) {
        let index = str.indexOf(chr);
        let count = 0;
        while(index !== -1) {
            count++;
            index = str.indexOf(chr, index+1);
            obj[chr] = count;
        }
    }

    let uniq = Object.entries(obj).filter((el) => el[1] === 1).map(el => el[0]).join("");
    let repeated = Object.entries(obj).filter((el) => el[1] > 1).map(el => el[0]).join("");

    return [uniq, repeated];
    
}

console.log(generate_strings("aabbcceffgh"))