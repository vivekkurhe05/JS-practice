/**
 * Write a Python program that concatenates uncommon characters from two strings.
 */

// my sol
function uncommon_chars_concat(str1, str2) {
    let arr1 = Array.prototype.slice.call(str1)
    let arr2 = Array.prototype.slice.call(str2)

    let uArr1 = arr1.filter((chr) => !arr2.includes(chr))
    let uArr2 = arr2.filter((chr) => !arr1.includes(chr))

    return uArr1.concat(uArr2).join("")
}

console.log(uncommon_chars_concat("abcdpqr","xyzabcd"))