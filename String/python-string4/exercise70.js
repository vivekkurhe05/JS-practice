/**
 * Write a Python program that concatenates uncommon characters from two strings.
 */

// my sol
function uncommon_chars_concat(str1, str2) {
    let arr1=Array.from(str1)
    let arr2=Array.from(str2)

    let farr1= arr1.filter(chr=>!arr2.includes(chr))
    let farr2= arr2.filter(chr=>!arr1.includes(chr))
    return farr1.concat(farr2).join("")
}

console.log(uncommon_chars_concat("abcdpqr","xyzabcd")) // pqrxyz