/**
 * Write a Java program to validate a given phone number.
 * 
 * Following are valid phone number examples:
“(123)4567890", "1234567890", "123-456-7890", "(123)456-7890",
Following are invalid phone numbers:
"(1234567890)","123)4567890", "12345678901", "(1)234567890", "(123)-4567890", "1", "12-3456-7890", "123-4567", "Hello world"

Regex explanation:
^\\(? - May start with an option "("
(\\d{3}) - Followed by 3 digits
\\)? - May have an optional ")"
[- ]? - May have an optional "-" after the first 3 digits or after optional ) character
(\\d{3}) - Followed by 3 digits.
[- ]? - May have another optional "-" after numeric digits
(\\d{4})$ - ends with four digits
 */

function validate(str) {
    const re = /^[\(]?[\d]{3}[\)]?(\-)?\d{3}(\-)?\d{4}$/g
    return re.test(str)
}

console.log(validate("(123)4567890")); // true
console.log(validate("1234567890")); // true
console.log(validate("123-456-7890")); // true
console.log(validate("(123)456-7890")); // true

console.log(validate("(1234567890)")); // false
console.log(validate("123)4567890")); // false, but getting true here
console.log(validate("12345678901")); // false
console.log(validate("(1)234567890")); // false
console.log(validate("(123)-4567890")); // false, but getting true here
console.log(validate("1")); // false
console.log(validate("12-3456-7890")); // false
console.log(validate("123-4567")); // false
console.log(validate("Hello world")); // false