/**
 * Write a Python program to get a single string from two given strings, 
 * separated by a space and swap the first two characters of each string.
 */

function chars_mix_up(str1, str2) {
    let input1 = str1.substring(0,str1.length-1);
    let input2 = str2.substring(0,str2.length-1);

    return `${input2.concat(str1[str1.length-1])} ${input1.concat(str2[str2.length-1])}`;
}

console.log(chars_mix_up('abc', 'xyz'))  // Output: 'xyc abz'