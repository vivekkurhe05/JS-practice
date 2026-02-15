/**
 * 
 * Write a JavaScript function that takes a string which has lower and upper case letters
 *  as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
 * Test Data :
 * console.log(swapcase('AaBbc'));
 * "aAbBC"
 */

function swapcase2(input) {
    const arr = Array.from(input);
    return arr.map(chr => {
        if(chr === chr.toUpperCase()) return chr = chr.toLowerCase();
        else return chr = chr.toUpperCase();
    }).join("");
}

console.log(swapcase2('AaBbc'));