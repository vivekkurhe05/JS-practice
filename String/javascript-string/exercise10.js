/**
 * 
 * Write a JavaScript function that takes a string which has lower and upper case letters
 *  as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
 * Test Data :
 * console.log(swapcase('AaBbc'));
 * "aAbBC"
 */

// my solution
function swapcase(str) {
    let arr = str.split("")
    return arr.map(el => {
        if(el===el.toUpperCase()) return el.toLowerCase()
        else return el.toUpperCase()
    }).join("")
}

console.log(swapcase('AaBbc'));