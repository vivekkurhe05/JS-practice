/**
 * How to replace characters except last with the specified mask character in JavaScript ?
 */

// my solution
function MaskCharacter(str, mask, num) {
    let re = /[0-9]/g

    if(typeof num === 'undefined') num = 1
    let firststr = str.slice(0,str.length-num).replace(re, (chr) => mask)
    let laststr = str.slice(-num)
    return firststr+laststr


}

console.log(MaskCharacter("9823207515", "#", 2));
console.log(MaskCharacter("8237103332", "#"));