/**
 * 
 * How to check a given string is an anagram of another string in JavaScript ?
 */

// my solution
function isAnagramString(str1, str2) {
    let arr1 = str1.trim().split("")
    let arr2 = str2.trim().split("")
    if(arr1.length === arr2.length) {
        return arr1.every((el) => arr2.includes(el))
    }
    else return false
}

console.log(isAnagramString('evil', 'vile'));
console.log(isAnagramString('a gentleman', 'elegant man'));
console.log(isAnagramString('eleven plus two', 'twelve plus one'));
console.log(isAnagramString('eleven plus two', 'twelve plus three'));
console.log(isAnagramString('hallo', 'hello'));
