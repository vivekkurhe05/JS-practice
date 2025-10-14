/**
 * Write a Python program that concatenates uncommon characters from two strings.
 */

function uncommon_chars_concat(str1, str2) {
    let arr1 = Array.from(str1); 
    let arr2 = Array.from(str2);

    let firstUncommonCharsSet = arr1.filter(el => !arr2.includes(el)).join("");
    let secondUncommonCharsSet = arr2.filter(el => !arr1.includes(el)).join("");

    return firstUncommonCharsSet.concat(secondUncommonCharsSet);
}

console.log(uncommon_chars_concat("abcdpqr","xyzabcd"))