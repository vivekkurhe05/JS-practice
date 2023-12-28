/**
 * Javascript exercises on string : Calculate the length of the string without using the length property
 * 
 */

function strLength(str) {

    let length = 0

    while(str[length] != undefined) {
        length++
    }

    return length
}

console.log(strLength('Vivek'));