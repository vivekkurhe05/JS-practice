/**
 * Write a Python program that concatenates uncommon characters from two strings.
 */

function uncommon_chars_concat(str1, str2) {
    const arr1 = Array.from(str1);
    const arr2 = Array.from(str2);

    const filter1 = arr1.filter((chr) => !arr2.includes(chr));
    const filter2 = arr2.filter((chr) => !arr1.includes(chr));

    return filter1.concat(filter2).join('');
}

console.log(uncommon_chars_concat("abcdpqr","xyzabcd"))