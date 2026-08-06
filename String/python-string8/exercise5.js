/**
 * Write a Python program to get a single string from two given strings, 
 * separated by a space and swap the first two characters of each string.
 */

function chars_mix_up(str1, str2) {
    let firstStr = str2.substring(0,2) + str1.slice(-1);
    let secondStr = str1.substring(0,2) + str2.slice(-1);
    return `${firstStr} ${secondStr}`;
}

console.log(chars_mix_up('abc', 'xyz'))  // Output: 'xyc abz'