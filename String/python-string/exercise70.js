/**
 * Write a Python program that concatenates uncommon characters from two strings.
 */

// my solution
function uncommon_chars_concat(str1, str2) {
    let arr1 = str1.split("")
    let arr2 = str2.split("")

    newarr1 = arr1.filter(el => !arr2.includes(el))

    newarr2 = arr2.filter(el => !arr1.includes(el))

    return newarr1.concat(newarr2).join("")
}

console.log(uncommon_chars_concat("abcdpqr","xyzabcd"))