/**
 * Write a JavaScript function to create a Zerofilled value with optional +, - sign.
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"
 */

function zeroFill(val, len, sep) {
    let str = val.toString()
    while(str.length<len) {
        str="0"+str
    }
    if(sep) {
        str="+"+str
    }
    return str
}

console.log(zeroFill(120, 5, '-'));
console.log(zeroFill(29, 4));