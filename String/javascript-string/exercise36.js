/**
 * Write a JavaScript function to create a Zerofilled value with optional +, - sign.
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"
 */

// my solution
function zeroFill(num, inp_len, sign) {
    let str = num.toString()

    while(str.length < inp_len) {
        str = "0" + str
    }

    if(sign === "-") return "+"+str

    return str
}

console.log(zeroFill(120, 5, '-'));
console.log(zeroFill(29, 4));