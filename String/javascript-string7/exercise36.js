/**
 * Write a JavaScript function to create a Zerofilled value with optional +, - sign.
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"
 */

function zeroFill(input, len, del) {
    input = input.toString();
    while(input.length < len) {
        input = "0"+input;
    }

    return input;
}

console.log(zeroFill(120, 5, '-'));
console.log(zeroFill(29, 4));