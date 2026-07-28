/**
 * 
 * Write a JavaScript function that takes a string which has lower and upper case letters
 *  as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
 * Test Data :
 * console.log(swapcase('AaBbc'));
 * "aAbBC"
 */

function swapcase(str) {
    return Array.from(str).map(chr => chr === chr.toUpperCase() ? chr.toLowerCase() : chr.toUpperCase()).join("");
}

console.log(swapcase('AaBbc'));