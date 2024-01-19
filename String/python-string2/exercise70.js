/**
 * Write a Python program that concatenates uncommon characters from two strings.
 */

// my solution
function uncommon_chars_concat(str1, str2) {
    let arr1 = str1.trim().split("")
    let arr2 = str2.trim().split("")

    let uncommon1 = arr1.filter(el => !arr2.includes(el)).join("")
    let uncommon2 = arr2.filter(el => !arr1.includes(el)).join("")

    return uncommon1+uncommon2
}

console.log(uncommon_chars_concat("abcdpqr","xyzabcd")) // pqrxyz