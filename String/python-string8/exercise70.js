/**
 * Write a Python program that concatenates uncommon characters from two strings.
 */

function uncommon_chars_concat(str1, str2) {
    let arr1 = str1.split("");
    let arr2 = str2.split("");

    let res1 = arr1.filter(el => !arr2.includes(el));
    let res2 = arr2.filter(el => !arr1.includes(el));

    return [res1, res2];
}

console.log(uncommon_chars_concat("abcdpqr","xyzabcd"))