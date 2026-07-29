/**
 * Write a JavaScript function to create a Zerofilled value with optional +, - sign.
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"
 */

function zeroFill(num, len, sign) {
    let result = num.toString().padStart(len, "0");
    if(sign !== undefined) result = "+" + result;

    return result;
}

console.log(zeroFill(120, 5, '-'));
console.log(zeroFill(29, 4));