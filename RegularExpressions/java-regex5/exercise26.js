/**
 * Write a Java function to check whether a given value is hexcolor value or not.
 * hexcolor is either 3 or 6 characters long
 * hexcolor should start with #
 * hexcolor contains either digits or alphabets or alphanumeric
 * digits range from 0-9
 * alphabets range from a-f or A-F
 */

function validate(str) {
    const re = /^#(([a-f]|[0-9]|[a-f0-9]){3}|([a-f]|[0-9]|[a-f0-9]){6})$/gi;
    return re.test(str);
}

console.log(validate("123456")); // false
console.log(validate("#eaecff")); // true
console.log(validate("#FF0000")); // true
console.log(validate("#DD5C5C")); // true
console.log(validate("#0000000")); // false
console.log(validate("#abcd")); // false