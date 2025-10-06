/**
 * Write a JavaScript function to create a zero-filled value with an optional +, - sign.
 */

// my sol
function zeroFill(num, len, op='0') {
    num = num.toString();
    return num.padStart(len, op);
}

console.log(zeroFill(120, 5, '-')); // Output: "--120"
console.log(zeroFill(29, 4)); // Output: "0029"

// or

// mastering js oop
function padLeft(num, len, op) {

    num = num.toString();

    op = op || "0"

    if(num.length < len) {
        num = new Array(len - num.length + 1).join(op) + num;
    }

    return num;
}

console.log(padLeft(120, 5, '-')); // Output: "--120"
console.log(padLeft(29, 4)); // Output: "0029"