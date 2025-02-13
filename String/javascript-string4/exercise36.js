/**
 * Write a JavaScript function to create a Zerofilled value with optional +, - sign.
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"
 */

// my sol
function zeroFill(num, len, sign) {
    let numStr = num.toString()
    while(len>numStr.length) {
        numStr="0"+numStr
    }
    if(sign==="-") {
        return "+".concat(numStr)
    }else{
        return numStr
    }
}
// true - 0123

console.log(zeroFill(120, 5, '-'));
console.log(zeroFill(29, 4));