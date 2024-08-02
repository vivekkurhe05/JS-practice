/**
 * Write a Python program that concatenates uncommon characters from two strings.
 */

// my solution
function uncommon_chars_concat(str1, str2) {
    let arr1 = Array.from(str1)
    let arr2 = Array.from(str2)

    let arr3 = arr1.filter(chr => !arr2.includes(chr))
    let arr4 = arr2.filter(chr => !arr1.includes(chr))

    return arr3.concat(arr4).join("")
}

console.log(uncommon_chars_concat("abcdpqr","xyzabcd")) // pqrxyz